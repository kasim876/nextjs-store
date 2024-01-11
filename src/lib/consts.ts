import {PathFilterItem, SortFilterItem} from './definitions';

export const defaultSort = {
  title: 'Relevance',
  slug: null,
  sortKey: '',
  reverse: false,
};

export const sortFilterLinks: SortFilterItem[] = [
  defaultSort,
  {
    title: 'Price: Low to high',
    slug: 'price-asc',
    sortKey: 'amount',
    reverse: false,
  },
  {
    title: 'Price: High to low',
    slug: 'price-desc',
    sortKey: 'amount',
    reverse: true,
  },
];

export const pathFilterLinks: PathFilterItem[] = [
  {title: 'All', href: '/search'},
  {title: 'Bags', href: '/search/bags'},
  {title: 'Drinkware', href: '/search/drinkware'},
  {title: 'Electronics', href: '/search/electronics'},
  {title: 'Footware', href: '/search/footware'},
  {title: 'Headware', href: '/search/headware'},
  {title: 'Hoodies', href: '/search/hoodies'},
  {title: 'Jackets', href: '/search/jackets'},
  {title: 'Kids', href: '/search/kids'},
  {title: 'Pets', href: '/search/pets'},
  {title: 'Shirts', href: '/search/shirts'},
  {title: 'Stickers', href: '/search/stickers'},
];
