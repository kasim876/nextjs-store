import Grid from '@/src/components/grid';
import ProductTile from '@/src/components/tile/tile';
import {defaultSort, sortFilterLinks} from '@/src/lib/consts';
import {fetchCollectionProductsWithSorting} from '@/src/lib/data';
import Link from 'next/link';
import {usePathname, useParams} from 'next/navigation';

export default async function Page({
  params,
  searchParams,
}: {
  params: {
    collection: string;
  };
  searchParams?: {
    sort?: string;
  };
}) {
  const sort = searchParams?.sort || '';

  const {sortKey, reverse} = sortFilterLinks.find(el => el.slug === sort) || defaultSort;

  const products = await fetchCollectionProductsWithSorting(params?.collection, sortKey, reverse);

  return (
    <main>
      {products.length === 0 ? (
        <p className="py-3 text-lg">There are no products in this collection</p>
      ) : (
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
      )}
    </main>
  );
}
