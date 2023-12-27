import {ShoppingCartIcon} from '@heroicons/react/24/outline';
import NavLinks from './nav-links';
import Search from './search';
import Link from 'next/link';
import Logo from '../../logo';

export default function Header() {
  return (
    <header className="flex items-center p-4">
      {/* TODO: do the burger menu */}
      <div className="block md:hidden">меню</div>
      <div className="flex items-center w-full">
        <nav className="flex w-full md:w-1/3">
          <Link
            href="/"
            className="flex items-center mr-2 md:mr-6"
          >
            <Logo />
            <p className="text-sm font-bold uppercase ml-2 md:hidden lg:block">Acme Store</p>
          </Link>
          <NavLinks />
        </nav>
        <div className="flex justify-center md:w-1/3">
          <Search />
        </div>
        <div className="flex justify-end md:w-1/3">
          <button className="flex items-center justify-center w-11 h-11 rounded-md border-primary">
            <ShoppingCartIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
