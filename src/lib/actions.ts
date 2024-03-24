'use server';

import {cookies} from 'next/headers';
import {updateCart} from './data';
import {revalidatePath} from 'next/cache';
import {v4} from 'uuid';

export async function addProduct(productId: string, size: string | null, color: string | null) {
  let cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    cartId = v4();
    cookies().set('cartId', cartId);
  }

  await updateCart(cartId, productId, size, color);

  revalidatePath('/basket');
}
