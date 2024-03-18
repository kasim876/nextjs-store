import {Product} from '@/src/lib/definitions';
import Price from '../tile/price';
import OptionsSelect from './options-select';
import AddToCartForm from './form';

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

      {!!product.color && <OptionsSelect option={{name: 'color', values: product.color}} />}
      {!!product.size && <OptionsSelect option={{name: 'size', values: product.size}} />}

      <AddToCartForm />
    </>
  );
}
