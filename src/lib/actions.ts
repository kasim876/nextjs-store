'use server';

import {deleteProductFromCart, addProductToCart} from './data';
import {revalidatePath} from 'next/cache';
import {getCartId} from './utils';

export async function addProduct(productId: string, size: string, color: string) {
  const cartId = getCartId();

  await addProductToCart(cartId, productId, size, color);

  revalidatePath('/basket');
}

export async function deleteProduct(productId: string, size: string, color: string) {
  const cartId = getCartId();

  await deleteProductFromCart(cartId, productId, size, color);

  revalidatePath('/basket');
}
