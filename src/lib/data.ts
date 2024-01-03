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

export async function fetchAllProducts() {
  try {
    const data = await sql<Product>`SELECT * FROM product`;

    return data.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}
