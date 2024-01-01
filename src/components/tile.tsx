import clsx from 'clsx';
import Image from 'next/image';

const Price = ({
  amount,
  currencyCode,
}: {
  amount: number;
  currencyCode: string;
} & React.ComponentProps<'p'>) => (
  <p
    suppressHydrationWarning={true}
    className="flex-none rounded-full bg-blue-600 p-2 text-white"
  >
    {`${new Intl.NumberFormat(undefined, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol',
    }).format(amount)}`}
    <span className="ml-1 inline">{`${currencyCode}`}</span>
  </p>
);

const Label = ({
  title,
  amount,
  currencyCode = 'USD',
  position = 'bottom',
}: {
  title: string;
  amount: number;
  currencyCode?: string;
  position?: 'bottom' | 'center';
}) => {
  return (
    <div
      className={clsx('absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label', {
        'lg:px-20 lg:pb-[35%]': position === 'center',
      })}
    >
      <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
        <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">{title}</h3>
        <Price
          amount={amount}
          currencyCode={currencyCode}
        />
      </div>
    </div>
  );
};

export default function ProductTile({
  active,
  label,
  ...props
}: {
  active?: boolean;
  label?: {
    title: string;
    amount: number;
    position?: 'bottom' | 'center';
  };
} & React.ComponentProps<typeof Image>) {
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black',
        {
          relative: label,
          'border-2 border-blue-600': active,
          'border-neutral-200 dark:border-neutral-800': !active,
        },
      )}
    >
      {props.src ? (
        <Image
          className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          position={label.position}
        />
      ) : null}
    </div>
  );
}
