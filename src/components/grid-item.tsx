import Link from 'next/link';
import {Product} from '../lib/definitions';
import ProductTile from './tile';

export default function GridItem({item, size}: {item: Product; size: 'full' | 'half'}) {
  return (
    <div className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}>
      <Link
        className="relative block w-full h-full aspect-square"
        href={`/product/${item.id}`}
      >
        <ProductTile
          label={{
            title: item.title,
            amount: item.amount,
            position: size === 'full' ? 'center' : 'bottom',
          }}
          src={item.image_url[0]}
          alt={item.title}
          fill
        />
      </Link>
    </div>
  );
}
