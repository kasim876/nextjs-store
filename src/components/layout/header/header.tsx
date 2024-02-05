import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import Link from 'next/link';
import Logo from '@/src/components/logo';
import Search from '@/src/components/search';
import MobileMenu from './mobile-menu';
import NavLinks from './nav-links';

export default function Header() {
  return (
    <header className="flex items-center p-4">
      <MobileMenu />
      <div className="flex items-center w-full">
        <nav className="flex w-full justify-center md:justify-start md:w-1/3">
          <Link
            href="/"
            className="flex items-center mr-2 md:mr-6"
          >
            <Logo />
            <p className="text-sm font-bold uppercase ml-2 md:hidden lg:block">Acme Store</p>
          </Link>
          <NavLinks />
        </nav>
        <div className="hidden md:flex justify-center md:w-1/3">
          <Search placeholder="Search for products..." />
        </div>
        <div className="flex justify-end md:w-1/3">
          <Link
            className="flex items-center justify-center w-11 h-11 rounded-md border-primary"
            href="/cart"
          >
            <ShoppingCartIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}
