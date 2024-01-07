import {sql} from '@vercel/postgres';
import {Product} from './definitions';
import {shuffle} from './utils';

export async function fetchHomepageFeaturedProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM product WHERE tag = 'homepage-featured-product'`;

    return data.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch featured products data');
  }
}

export async function fetchCommonProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM product WHERE tag = 'common'`;

    return shuffle(data.rows).slice(0, 5);
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch common products data');
  }
}

export async function fetchAllProducts(query: string) {
  try {
    const data = await sql<Product>`SELECT * FROM product WHERE title ILIKE ${`%${query}%`}`;

    return data.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}

export async function fetchCollectionProducts(collection: string) {
  try {
    const data = await sql<Product>`SELECT * FROM product WHERE category = ${collection}`;

    return data.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}

export async function fetchProductById(id: string) {
  try {
    const data = await sql<Product>`SELECT * FROM product WHERE id = ${id}`;

    return data.rows[0];
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}
