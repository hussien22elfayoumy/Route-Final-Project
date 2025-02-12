import { Link, NavLink } from 'react-router-dom';
import AppLogo from '../assets/app-logo.svg';
import { useState } from 'react';
import UserMenu from './UserMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = false;
  return (
    <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <Link
          to="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src={AppLogo}
            className="h-7"
            alt="Fresh Cart logo"
          />
        </Link>

        <div className="flex items-center space-x-3 md:order-2 md:space-x-0">
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <button
              type="button"
              className="rounded-lg bg-emerald-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-600"
            >
              Login now
            </button>
          )}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:focus:ring-emerald-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${isOpen ? 'hidden' : ''} w-full items-center justify-between md:order-1 md:flex md:w-auto`}
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse">
            <li>
              <NavLink
                to="/"
                className="block rounded-sm px-3 py-2 hover:text-emerald-600 md:bg-transparent md:p-0"
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 hover:text-emerald-600 md:p-0 md:hover:bg-transparent md:hover:text-emerald-600"
              >
                Products
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 hover:text-emerald-600 md:p-0 md:hover:bg-transparent md:hover:text-emerald-600"
              >
                Categories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/brands"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 hover:text-emerald-600 md:p-0 md:hover:bg-transparent md:hover:text-emerald-600"
              >
                Brands
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/cart"
                className="block rounded-sm px-3 py-2 hover:bg-gray-100 hover:text-emerald-600 md:p-0 md:hover:bg-transparent md:hover:text-emerald-600"
              >
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
