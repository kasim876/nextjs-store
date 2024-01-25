'use client';

import {ProductOption} from '@/src/lib/definitions';
import {createUrl} from '@/src/lib/utils';
import clsx from 'clsx';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function OptionsSelect({option}: {option: ProductOption}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <dl className="mb-8">
      <dt className="mb-4 text-sm tracking-wide uppercase">{option.name}</dt>
      <dd className="flex flex-wrap gap-3">
        {option.values.map(value => {
          const isActive = searchParams.get(option.name) === value;
          const optionSearchParams = new URLSearchParams(searchParams.toString());
          optionSearchParams.set(option.name, value);

          const optionUrl = createUrl(pathname, optionSearchParams);

          return (
            <button
              key={value}
              onClick={() => router.replace(optionUrl, {scroll: false})}
              className={clsx(
                'capitalize min-w-[48px] rounded-full border-primary px-2 py-1 text-sm dark:bg-neutral-900 transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600',
                {
                  'pointer-events-none ring-2 ring-blue-600': isActive,
                },
              )}
            >
              {value}
            </button>
          );
        })}
      </dd>
    </dl>
  );
}
