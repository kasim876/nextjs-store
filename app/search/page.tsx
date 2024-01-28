import Grid from '@/src/components/grid';
import ProductTile from '@/src/components/tile/tile';
import {defaultSort, sortFilterLinks} from '@/src/lib/consts';
import {fetchProductsWithSearchAndSorting} from '@/src/lib/data';
import Link from 'next/link';

export default async function SearchPage({searchParams}: {searchParams?: {query?: string; sort?: string}}) {
  const query = searchParams?.query || '';
  const sort = searchParams?.sort || '';

  const {sortKey, reverse} = sortFilterLinks.find(el => el.slug === sort) || defaultSort;

  const products = await fetchProductsWithSearchAndSorting(query, sortKey, reverse);

  const resultText = products.length > 1 ? 'results' : 'result';

  return (
    <main>
      {query ? (
        <p className="mb-4">
          {products.length === 0
            ? 'There are no products that match '
            : `Showing ${products.length} ${resultText} for `}
          <span className="font-bold">&quot;{query}&quot;</span>
        </p>
      ) : null}
      {products.length > 0 ? (
        <Grid className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(product => (
            <Grid.Item
              className="col-span-1"
              key={product.id}
            >
              <Link href={`/product/${product.id}`}>
                <ProductTile
                  label={{
                    title: product.title,
                    amount: product.amount,
                  }}
                  src={product.image_url[0]}
                  alt={product.title}
                  fill
                />
              </Link>
            </Grid.Item>
          ))}
        </Grid>
      ) : null}
    </main>
  );
}
