import { useState } from 'react';
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

export default function UserMenu() {
  const [openUserMenu, setOpenUserMenu] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpenUserMenu((prev) => !prev)}
        type="button"
        className="flex rounded-full bg-gray-800 text-sm focus:ring-4 focus:ring-gray-300 md:me-0 dark:focus:ring-gray-600"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src="/docs/images/people/profile-picture-3.jpg"
          alt="user photo"
        />
      </button>
      <div
        className={`absolute right-[50%] top-[25px] z-50 my-4 translate-x-[50%] border shadow-lg ${
          openUserMenu ? '' : 'hidden'
        } list-none divide-y divide-gray-100 rounded-lg bg-slate-50 text-base shadow-sm`}
        id="user-dropdown"
      >
        <div className="border-b border-b-gray-300 px-4 py-2">
          <span className="block text-sm text-gray-900">user name</span>
          <span className="block truncate text-sm text-gray-500">utest@email.com</span>
        </div>
        <ul
          className="py-2"
          aria-labelledby="user-menu-button"
        >
          <li>
            <NavLink
              to="/all-orders"
              className="block rounded-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              All Orders
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/wishlist"
              className="block rounded-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              WishList
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className="block rounded-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              Cart
            </NavLink>
          </li>
          <li className="mt-2 px-2 text-center">
            <button
              type="button"
              className="flex w-full items-center gap-1 rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600"
            >
              <HiArrowLeftStartOnRectangle className="text-lg" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
