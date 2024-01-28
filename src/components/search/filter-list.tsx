import {FilterListItem, PathFilterItem, SortFilterItem} from '@/src/lib/definitions';
import FilterItem from './filter-item';
import Dropdown from './dropdown';

function FilterItemList({list}: {list: FilterListItem[]}) {
  return (
    <>
      {list.map((item, i) => (
        <FilterItem
          item={item}
          key={i}
        />
      ))}
    </>
  );
}

/* TODO: do the dropdown menu for mobile phone */
export default function FilterList({list, title}: {list: FilterListItem[]; title?: string}) {
  return (
    <nav>
      <h3 className="text-xs text-neutral-500 dark:text-neutral-400">{title}</h3>
      <ul className="hidden md:block">
        <FilterItemList list={list} />
      </ul>
      <div className="block md:hidden">
        <Dropdown list={list} />
      </div>
    </nav>
  );
}
