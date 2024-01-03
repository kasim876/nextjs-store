export type Product = {
  id?: number;
  title: string;
  amount: number;
  image_url: string[];
  category: string;
  tag: 'homepage-featured-product' | 'common';
};

export type MenuLink = {
  name: string;
  href: string;
};
