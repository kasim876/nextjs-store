import {Product} from '@/src/lib/definitions';
import Price from '../tile/price';
import OptionsSelect from './options-select';

export default function ProductDescription({product}: {product: Product}) {
  return (
    <>
      <div className="flex flex-col mb-6 pb-6 border-b-primary">
        <h1 className="mb-2 font-medium text-5xl">{product.title}</h1>
        <div className="mr-auto">
          <Price
            amount={product.amount}
            currencyCode="USD"
          />
        </div>
      </div>

      <OptionsSelect option={{name: 'color', values: ['black', 'blue', 'gray', 'pink', 'white']}} />
      <OptionsSelect option={{name: 'size', values: ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']}} />

      <form>
        <button className="relative rounded-full w-full p-4 bg-blue-600 tracking-wide text-white hover:opacity-60">
          <span className="absolute left-0 top-0 flex items-center h-full ml-4 text-3xl">+</span>
          Add To Cart
        </button>
      </form>
    </>
  );
}
