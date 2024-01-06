import {PathFilterItem, SortFilterItem} from '@/src/lib/definitions';
import FilterItem from './filter-item';

/* TODO: do the dropdown menu for mobile phone */
export default function FilterList({list, title}: {list: PathFilterItem[] | SortFilterItem[]; title?: string}) {
  return (
    <nav>
      <h3 className="text-xs text-neutral-500 dark:text-neutral-400">{title}</h3>
      <ul>
        {list.map(item => (
          <FilterItem
            item={item}
            key={item.title}
          />
        ))}
      </ul>
    </nav>
  );
}
