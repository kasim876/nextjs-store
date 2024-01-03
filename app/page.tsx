import {fetchHomepageFeaturedProducts} from '@/src/lib/data';
import GridItem from '@/src/components/grid-item';

export default async function Home() {
  const featuredProducts = await fetchHomepageFeaturedProducts();

  if (!featuredProducts) return null;

  const [firstProduct, secondProduct, thirdProduct] = featuredProducts;

  return (
    <main>
      <section className="grid md:grid-cols-6 md:grid-rows-2 gap-4 px-4 mb-4 max-w-screen-lg mx-auto">
        <GridItem
          item={firstProduct}
          size="full"
        />
        <GridItem
          item={secondProduct}
          size="half"
        />
        <GridItem
          item={thirdProduct}
          size="half"
        />
      </section>
    </main>
  );
}
