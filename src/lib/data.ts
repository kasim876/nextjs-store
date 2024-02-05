import {Pool} from 'pg';
import {sql} from '@vercel/postgres';
import {Cart, Product} from './definitions';
import {unstable_noStore as noStore, unstable_cache as cache} from 'next/cache';

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

export async function updateCart(cartId: string, productId: string) {
  const client = await pool.connect();

  try {
    const result = await client.query(`SELECT * FROM cart WHERE cart_id = $1 AND product_id = $2`, [cartId, productId]);
    const foundProduct = result.rows;

    if (foundProduct.length > 0) {
      await client.query(`UPDATE cart SET quantity = quantity + 1 WHERE cart_id = $1 AND product_id = $2`, [
        cartId,
        productId,
      ]);
    } else {
      await client.query(`INSERT INTO cart (cart_id, product_id, quantity) VALUES ($1, $2, 1)`, [cartId, productId]);
    }
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to update product in cart');
  } finally {
    client.release();
  }
}

export async function getCart(cartId: string) {
  const client = await pool.connect();

  try {
    const result = await client.query<Cart>(
      `SELECT product.title, product.amount, product.image_url, cart.quantity
      FROM product
      INNER JOIN cart ON product.id = cart.product_id
      WHERE cart_id = $1`,
      [cartId],
    );

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch featured cart data');
  } finally {
    client.release();
  }
}

export async function fetchHomepageFeaturedProducts() {
  try {
    // await new Promise(resolve => setTimeout(resolve, 5000));

    const result = await sql<Product>`SELECT * FROM product WHERE tag = 'homepage-featured-product'`;

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch featured products data');
  }
}

export async function fetchCommonProducts() {
  try {
    // await new Promise(resolve => setTimeout(resolve, 5000));

    const result = await sql<Product>`SELECT * FROM product WHERE tag = 'common'`;

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch common products data');
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
    // await new Promise(resolve => setTimeout(resolve, 3000));

    let queryText = `SELECT * FROM product`;

    if (searchQuery) {
      queryText += ` WHERE title ILIKE '%${searchQuery}%'`;
    }
    if (columnName) {
      queryText += ` ORDER BY ${columnName}`;

      if (reverseSort) {
        queryText += ` DESC`;
      }
    }

    const result = await client.query<Product>(queryText);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}

export async function fetchCollectionProductsWithSorting(collection: string, columnName: string, reverseSort: boolean) {
  noStore();

  const client = await pool.connect();

  try {
    // await new Promise(resolve => setTimeout(resolve, 3000));

    let queryText = `SELECT * FROM product WHERE category = '${collection}'`;

    if (columnName) {
      queryText += ` ORDER BY ${columnName}`;

      if (reverseSort) {
        queryText += ` DESC`;
      }
    }

    const result = await client.query<Product>(queryText);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}

export async function fetchProductById(id: string) {
  try {
    // await new Promise(resolve => setTimeout(resolve, 6000));

    const result = await sql<Product>`SELECT * FROM product WHERE id = ${id}`;

    return result.rows[0];
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}
