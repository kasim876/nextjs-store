import {formatCurrency} from '@/src/lib/utils';

export default function Price({amount, currencyCode}: {amount: number; currencyCode: string}) {
  return (
    <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
      {formatCurrency(amount)}
      <span className="ml-1 inline">{currencyCode}</span>
    </p>
  );
}
