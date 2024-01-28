import FilterList from '@/src/components/search/filter-list';
import {pathFilterLinks, sortFilterLinks} from '@/src/lib/consts';
import React from 'react';

export default function SearchLayout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex flex-col md:flex-row px-4">
      <div className="order-first w-full md:w-1/5 my-4 md:my-0">
        <FilterList
          title="Collections"
          list={pathFilterLinks}
        />
      </div>
      <div className="order-last md:order-none w-full md:mx-4">{children}</div>
      <div className="order-none md:order-last w-full md:w-1/5 my-4 md:my-0">
        <FilterList
          title="Order by"
          list={sortFilterLinks}
        />
      </div>
    </div>
  );
}
