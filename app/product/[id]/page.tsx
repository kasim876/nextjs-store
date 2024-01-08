import ProductDescription from '@/src/components/product/descr';
import Gallery from '@/src/components/product/gallery';
import {fetchProductById} from '@/src/lib/data';
import {notFound} from 'next/navigation';

export default async function Page({
  params,
}: {
  params: {
    id: string;
  };
}) {
  const product = await fetchProductById(params.id);

  if (!product) return notFound();

  return (
    <main>
      <section className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 rounded-lg border-primary p-8 lg:p-12 bg-white dark:bg-black">
          <div className="basis-full lg:basis-2/3">
            <Gallery product={product} />
          </div>
          <div className="basis-full lg:basis-1/3">
            <ProductDescription product={product} />
          </div>
        </div>
      </section>
    </main>
  );
}
