'use client';

import {addProduct} from '@/src/lib/actions';
import {useParams} from 'next/navigation';

function Button() {
  return (
    <button className="relative rounded-full w-full p-4 bg-blue-600 tracking-wide text-white hover:opacity-60">
      <span className="absolute left-0 top-0 flex items-center h-full ml-4 text-3xl">+</span>
      Add To Cart
    </button>
  );
}

export default function Form() {
  const {id} = useParams<{id: string}>();
  const bindAddProduct = addProduct.bind(null, id);

  return (
    <form action={bindAddProduct}>
      <Button />
    </form>
  );
}
