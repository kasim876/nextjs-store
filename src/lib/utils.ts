import {ReadonlyURLSearchParams} from 'next/navigation';

export function formatCurrency(amount: number) {
  const formatedOption = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'narrowSymbol',
  });

  return formatedOption.format(amount);
}

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function createUrl(pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
}
