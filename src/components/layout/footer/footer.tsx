import Link from 'next/link';
import Logo from '../../logo';
import {MenuLink} from '@/src/lib/definitions';

const links: MenuLink[] = [
  {name: 'Home', href: '/'},
  {name: 'About', href: '/about'},
  {name: 'Terms & Conditions', href: '/terms-conditions'},
  {name: 'Shipping & Return Policy', href: '/shipping-return-policy'},
  {name: 'Privacy Policy', href: '/privacy-policy'},
  {name: 'FAQ', href: '/frequently-asked-questions'},
];

export default function Footer() {
  return (
    <footer className="flex items-start p-4">
      <Link
        href="/"
        className="flex items-center mr-6 md:mr-12"
      >
        <Logo />
        <p className="text-sm font-bold uppercase ml-2 md:hidden lg:block">Acme Store</p>
      </Link>
      <ul className="flex flex-col items-start">
        {links.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block p-2 text-sm underline-offset-4 text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-neutral-300 hover:underline"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </footer>
  );
}
