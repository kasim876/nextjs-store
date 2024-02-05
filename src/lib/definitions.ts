export type Product = {
  id?: number;
  title: string;
  amount: number;
  image_url: string[];
  category: string;
  tag: 'homepage-featured-product' | 'common';
};

export type Cart = {
  title: string;
  amount: number;
  image_url: string[];
  quantity: number;
};

export type MenuLink = {
  name: string;
  href: string;
};

export type SortFilterItem = {
  title: string;
  slug: string | null;
  sortKey: string;
  reverse: boolean;
};

export type PathFilterItem = {
  title: string;
  href: string;
};

export type FilterListItem = PathFilterItem | SortFilterItem;

export type ProductOption = {
  name: string;
  values: string[];
};
