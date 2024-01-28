'use client';

import {FilterListItem, PathFilterItem, SortFilterItem} from '@/src/lib/definitions';
import {createUrl} from '@/src/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import {usePathname, useSearchParams} from 'next/navigation';

function PathFilterItem({item}: {item: PathFilterItem}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive = pathname === item.href;
  const newParams = new URLSearchParams(searchParams.toString());

  newParams.delete('query');

  return (
    <li className="mt-2 text-black dark:text-white">
      <Link
        href={createUrl(item.href, newParams)}
        className={clsx('text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100', {
          'underline pointer-events-none': isActive,
        })}
      >
        {item.title}
      </Link>
    </li>
  );
}

function SortFilterItem({item}: {item: SortFilterItem}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isActive = searchParams.get('sort') === item.slug;
  const query = searchParams.get('query');
  const newParams = new URLSearchParams({
    ...(query && {query}),
    ...(item.slug && item.slug.length && {sort: item.slug}),
  });

  return (
    <li className="mt-2 text-black dark:text-white">
      <Link
        href={createUrl(pathname, newParams)}
        className={clsx('text-sm underline-offset-4 hover:underline dark:hover:text-neutral-100', {
          'underline pointer-events-none': isActive,
        })}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function FilterItem({item}: {item: FilterListItem}) {
  return 'href' in item ? <PathFilterItem item={item} /> : <SortFilterItem item={item} />;
}
