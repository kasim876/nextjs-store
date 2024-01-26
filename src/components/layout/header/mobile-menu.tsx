'use client';

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {MenuLink} from '@/src/lib/definitions';
import {usePathname} from 'next/navigation';
import Search from '../../search';

const links: MenuLink[] = [
  {name: 'All', href: '/search'},
  {name: 'Shirts', href: '/search/shirts'},
  {name: 'Stickers', href: '/search/stickers'},
];

export default function MobileMenu() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMobileMenu = () => setIsOpen(true);
  const closeMobileMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  useEffect(() => closeMobileMenu(), [pathname]);

  return (
    <div>
      <button
        onClick={openMobileMenu}
        className="md:hidden flex items-center justify-center w-11 h-11 border-primary rounded-md p-2"
      >
        <Bars3Icon />
      </button>
      {isOpen ? (
        <div className="flex justify-center items-center bg-white w-screen h-screen fixed top-0 left-0 z-50">
          <button
            className="absolute top-4 right-4 w-11 h-11"
            onClick={closeMobileMenu}
          >
            <XMarkIcon />
          </button>
          <Search placeholder="Search for products..." />
          <ul className="flex items-center space-x-6">
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
        </div>
      ) : null}
    </div>
  );
}
