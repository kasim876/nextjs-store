import FilterList from '@/src/components/search/filter-list';
import {pathFilterLinks, sortFilterLinks} from '@/src/lib/consts';
import React from 'react';

export default function ({children}: {children: React.ReactNode}) {
  return (
    <div className="flex px-4">
      <div className="w-1/5">
        <FilterList
          title="Collections"
          list={pathFilterLinks}
        />
      </div>
      <div className="w-full mx-4">{children}</div>
      <div className="w-1/5">
        <FilterList
          title="Order by"
          list={sortFilterLinks}
        />
      </div>
    </div>
  );
}
