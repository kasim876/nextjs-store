'use server';

import {cookies} from 'next/headers';
import {Cart} from './definitions';
import {updateCart} from './data';
import {revalidatePath} from 'next/cache';
import {v4} from 'uuid';

export async function addProduct(productId: string) {
  let cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    cartId = v4();
    cookies().set('cartId', cartId);
  }

  await updateCart(cartId, productId);

  revalidatePath('/basket');
}
