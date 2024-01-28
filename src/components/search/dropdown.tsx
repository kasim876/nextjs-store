'use client';

import {ChevronDownIcon} from '@heroicons/react/24/outline';
import {usePathname, useSearchParams} from 'next/navigation';
import {KeyboardEventHandler, useEffect, useRef, useState} from 'react';
import FilterItem from './filter-item';
import {FilterListItem} from '@/src/lib/definitions';

export default function Dropdown({list}: {list: FilterListItem[]}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [active, setActive] = useState('');
  const [openSelect, setOpenSelect] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpenSelect(false);
      }
    };

    const handlePressEscape = (event: KeyboardEvent) => {
      if (ref.current && event.key === 'Escape') {
        setOpenSelect(false);
      }
    };

    window.addEventListener('keydown', handlePressEscape);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    list.forEach(listItem => {
      if (
        ('href' in listItem && pathname === listItem.href) ||
        ('slug' in listItem && searchParams.get('sort') === listItem.slug)
      ) {
        setActive(listItem.title);
      }
    });
  }, [pathname, list, searchParams]);

  return (
    <div
      className="relative"
      ref={ref}
    >
      <div
        onClick={() => {
          setOpenSelect(!openSelect);
        }}
        className="flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm dark:border-white/30"
      >
        <div>{active}</div>
        <ChevronDownIcon className="h-4" />
      </div>
      {openSelect && (
        <ul
          onClick={() => {
            setOpenSelect(false);
          }}
          className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md dark:bg-black"
        >
          {list.map((item, i) => (
            <FilterItem
              key={i}
              item={item}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
