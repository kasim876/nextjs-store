'use client';

import {addProduct} from '@/src/lib/actions';
import {useParams, useSearchParams} from 'next/navigation';
import {useFormState, useFormStatus} from 'react-dom';

function Button({disabled}: {disabled: boolean}) {
  const {pending} = useFormStatus();

  return (
    <button
      className="relative rounded-full w-full p-4 bg-blue-600 tracking-wide text-white hover:opacity-60 disabled:opacity-40 disabled:cursor-not-allowed"
      disabled={pending || disabled}
    >
      <span className="absolute left-0 top-0 flex items-center h-full ml-4 text-3xl">+</span>
      Add To Cart
    </button>
  );
}

export default function Form({disabled}: {disabled: boolean}) {
  const searchParams = useSearchParams();

  const {id} = useParams<{id: string}>();
  const size = searchParams.get('size');
  const color = searchParams.get('color');

  const addProductWithId = addProduct.bind(null, id, size, color);
  const [errorMessage, dispatch] = useFormState(addProductWithId, null);

  return (
    <form action={dispatch}>
      <Button disabled={disabled} />
    </form>
  );
}
