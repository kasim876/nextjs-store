import {Pool} from 'pg';
import {sql} from '@vercel/postgres';
import {Cart, Product} from './definitions';
import {unstable_noStore as noStore, unstable_cache as cache} from 'next/cache';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

export async function addProductToCart(cartId: string, productId: string, size: string, color: string) {
  const client = await pool.connect();

  try {
    const checkProductExistsQuery = `
      SELECT id FROM cart
      WHERE cart_id = $1 AND product_id = $2 AND color = $3 AND size = $4
    `;

    const checkProductExistsResult = await client.query(checkProductExistsQuery, [cartId, productId, size, color]);

    if (checkProductExistsResult.rowCount > 0) {
      const updateQuantityQuery = `
        UPDATE cart_items
        SET quantity = quantity + 1
        WHERE cart_id = $1 AND product_id = $2 AND color = $3 AND size = $4
      `;

      await client.query(updateQuantityQuery, [cartId, productId, size, color]);
    } else {
      const insertProductQuery = `
        INSERT INTO cart (cart_id, product_id, color, size, quantity)
        VALUES ($1, $2, $3, $4, 1)
      `;

      await client.query(insertProductQuery, [cartId, productId, color, size]);
    }
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to add product to cart.');
  } finally {
    client.release();
  }
}

export async function deleteProductFromCart(cartId: string, productId: string, size: string, color: string) {
  const client = await pool.connect();

  try {
    const deleteProductQuery = `
      DELETE FROM cart
      WHERE cart_id = $1 AND product_id = $2 AND (size = $3 OR size IS NULL) AND (color = $4 OR color IS NULL)
    `;

    await client.query(deleteProductQuery, [cartId, productId, size, color]);
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to delete product from cart.');
  } finally {
    client.release();
  }
}

export async function getCart(cartId: string) {
  const client = await pool.connect();

  try {
    const getCartQuery = `
      SELECT id, title, amount, image_url, cart.size, cart.color, quantity FROM product
      JOIN cart ON product.id = cart.product_id
      WHERE cart_id = $1
    `;

    const result = await client.query<Cart>(getCartQuery, [cartId]);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch cart data.');
  } finally {
    client.release();
  }
}

export async function fetchHomepageProducts() {
  const client = await pool.connect();

  try {
    const fetchHomepageProductsQuery = `
      SELECT * FROM product
      WHERE tag = 'homepage-featured-product
    `;

    const result = await client.query<Product>(fetchHomepageProductsQuery);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch featured products data.');
  } finally {
    client.release();
  }
}

export async function fetchCommonProducts() {
  const client = await pool.connect();

  try {
    const fetchCommonProductsQuery = `
      SELECT * FROM product
      WHERE tag = 'common'
    `;

    const result = await client.query<Product>(fetchCommonProductsQuery);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch common products data.');
  } finally {
    client.release();
  }
}

export async function fetchProductsWithSearchAndSorting(
  searchQuery?: string,
  columnName?: string,
  reverseSort?: boolean,
) {
  noStore();

  const client = await pool.connect();

  try {
    let fetchProductsQuery = `SELECT * FROM product`;

    if (searchQuery) {
      fetchProductsQuery += ` WHERE title ILIKE '%${searchQuery}%'`;
    }
    if (columnName) {
      fetchProductsQuery += ` ORDER BY ${columnName}`;

      if (reverseSort) {
        fetchProductsQuery += ` DESC`;
      }
    }

    const result = await client.query<Product>(fetchProductsQuery);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data.');
  } finally {
    client.release();
  }
}

export async function fetchCollectionProductsWithSorting(collection: string, columnName: string, reverseSort: boolean) {
  noStore();

  const client = await pool.connect();

  try {
    let fetchCollectionQuery = `SELECT * FROM product WHERE category = '${collection}'`;

    if (columnName) {
      fetchCollectionQuery += ` ORDER BY ${columnName}`;

      if (reverseSort) {
        fetchCollectionQuery += ` DESC`;
      }
    }

    const result = await client.query<Product>(fetchCollectionQuery);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}

export async function fetchProductById(id: string) {
  const client = await pool.connect();

  try {
    const fetchProductQuery = `
      SELECT * FROM product
      WHERE id = ${id}
    `;

    const result = await client.query<Product>(fetchProductQuery);

    return result.rows[0];
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}
