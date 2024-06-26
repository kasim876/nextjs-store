import clsx from 'clsx';
import Price from './price';

export default function Label({
  title,
  amount,
  currencyCode = 'USD',
  position = 'bottom',
}: {
  title: string;
  amount: number;
  currencyCode?: string;
  position?: 'bottom' | 'center';
}) {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center',
      })}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 tracking-tight">{title}</h3>
        <Price
          amount={amount}
          currencyCode={currencyCode}
        />
      </div>
    </div>
  );
}
