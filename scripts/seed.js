const {db} = require('@vercel/postgres');
const {products} = require('../src/lib/placeholder-data.js');

async function seedProducts(client) {
  try {
    const createdTable = await client.sql`
      CREATE TABLE IF NOT EXISTS product (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        amount INTEGER NOT NULL,
        image_url VARCHAR(255)[] NOT NULL,
        category VARCHAR(255) NOT NULL,
        tag VARCHAR(255) NOT NULL
      );
    `;

    console.log(`Created "product" table`);

    const insertedProducts = await Promise.all(
      products.map(
        product => client.sql`
          INSERT INTO product (title, amount, image_url, category, tag)
          VALUES (${product.title}, ${product.amount}, ${product.image_url}, ${product.category}, ${product.tag})
          ON CONFLICT (id) DO NOTHING;
        `,
      ),
    );

    console.log(`Seeded ${insertedProducts.length} products`);

    return {
      createdTable,
      products: insertedProducts,
    };
  } catch (error) {
    console.error('Error seeding products:', error);
    throw error;
  }
}

async function seedCart(client) {
  try {
    const createdTable = await client.sql`
      CREATE TABLE IF NOT EXISTS cart (
        cart_id UUID NOT NULL,
        product_id UUID NOT NULL,
        quantity INTEGER NOT NULL
      );
    `;

    console.log(`Created "cart" table`);

    return {
      createdTable,
    };
  } catch (error) {
    console.error('Error seeding cart: ', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedProducts(client);
  await seedCart(client);

  await client.end();
}

main().catch(err => {
  console.error('An error occurred while attempting to seed the database:', err);
});
