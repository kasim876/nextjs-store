import {MenuLink} from '@/src/lib/definitions';
import Link from 'next/link';

// TODO: do the getting menu item from server
const links: MenuLink[] = [
  {name: 'All', href: '/search'},
  {name: 'Shirts', href: '/search/shirts'},
  {name: 'Stickers', href: '/search/stickers'},
];

export default function NavLinks() {
  return (
    <ul className="hidden md:flex items-center space-x-6">
      {links.map(link => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-sm underline-offset-4 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-neutral-300 hover:underline"
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
