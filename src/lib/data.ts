import pg from 'pg';
import {sql} from '@vercel/postgres';
import {Product} from './definitions';
import {shuffle} from './utils';
import {unstable_noStore as noStore} from 'next/cache';

const {Pool} = pg;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + '?sslmode=require',
});

export async function fetchHomepageFeaturedProducts() {
  noStore();

  try {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const data = await sql<Product>`SELECT * FROM product WHERE tag = 'homepage-featured-product'`;

    return data.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch featured products data');
  }
}

export async function fetchCommonProducts() {
  noStore();

  try {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const data = await sql<Product>`SELECT * FROM product WHERE tag = 'common'`;

    return shuffle(data.rows).slice(0, 5);
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch common products data');
  }
}

export async function fetchProductsWithSearchAndSorting(searchQuery: string, columnName: string, reverseSort: boolean) {
  noStore();

  const client = await pool.connect();

  try {
    // await new Promise(resolve => setTimeout(resolve, 5000));

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

    const result = await client.query(queryText);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}

export async function fetchCollectionProductsWithSearchAndSorting(
  collection: string,
  columnName: string,
  reverseSort: boolean,
) {
  noStore();

  const client = await pool.connect();

  try {
    // await new Promise(resolve => setTimeout(resolve, 5000));

    let queryText = `SELECT * FROM product WHERE category = '${collection}'`;

    if (columnName) {
      queryText += ` ORDER BY ${columnName}`;

      if (reverseSort) {
        queryText += ` DESC`;
      }
    }

    console.log(queryText);

    const result = await client.query(queryText);

    return result.rows;
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  } finally {
    client.release();
  }
}

export async function fetchProductById(id: string) {
  noStore();

  try {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const data = await sql<Product>`SELECT * FROM product WHERE id = ${id}`;

    return data.rows[0];
  } catch (error) {
    console.log('Database error: ', error);
    throw new Error('Failed to fetch products data');
  }
}
