'use client';

import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';

export default function Search({placeholder}: {placeholder: string}) {
  const searchParams = useSearchParams();
  const {replace} = useRouter();
  const searchPathname = '/search';

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }

    replace(`${searchPathname}?${params.toString()}`);
  };

  return (
    <div className="relative w-full max-w-[500px] lg:w-80 xl:w-full">
      <input
        type="text"
        name="search"
        placeholder={placeholder}
        defaultValue={searchParams.get('query') || ''}
        onKeyDown={e => {
          if (e.key === 'Enter') handleSearch((e.target as HTMLInputElement).value);
        }}
        className="w-full pl-4 pr-8 py-2 rounded-lg border-primary bg-white dark:bg-transparent text-sm text-black dark:text-white placeholder:text-neutral-500 dark:placeholder:text-neutral-400"
      />
      <div className="absolute right-4 top-0 flex items-center h-full">
        <MagnifyingGlassIcon className="w-4 h-4" />
      </div>
    </div>
  );
}
