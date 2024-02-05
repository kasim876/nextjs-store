'use client';

import {addProduct} from '@/src/lib/actions';
import {useParams} from 'next/navigation';
import {useState} from 'react';
import {useFormState, useFormStatus} from 'react-dom';

function Button() {
  const {pending} = useFormStatus();

  return (
    <button
      className="relative rounded-full w-full p-4 bg-blue-600 tracking-wide text-white hover:opacity-60 disabled:opacity-40 disabled:cursor-not-allowed"
      disabled={pending}
    >
      <span className="absolute left-0 top-0 flex items-center h-full ml-4 text-3xl">+</span>
      Add To Cart
    </button>
  );
}

export default function Form() {
  const {id} = useParams<{id: string}>();
  const addProductWithId = addProduct.bind(null, id);
  const [errorMessage, dispatch] = useFormState(addProductWithId, null);

  return (
    <form action={dispatch}>
      <Button />
    </form>
  );
}
