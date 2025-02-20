import { useState } from 'react';
import { HiArrowLeftStartOnRectangle } from 'react-icons/hi2';
import { NavLink, useNavigate } from 'react-router-dom';
import { useUserCtx } from '../contexts/UserContext';
import { handleLogout } from '../utils/auth-api';
import UserImg from '../assets/userImg.png';
import { useCartCtx } from '../contexts/CartContext';
import { useWishListContext } from '../contexts/WishListContext';

export default function UserMenu() {
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const { user, handleUser } = useUserCtx();
  const { userCart, setUserCart } = useCartCtx();
  const { userWishList, setUserWishList } = useWishListContext();
  const navigate = useNavigate();

  return (
    <div className="relative">
      <button
        onClick={() => setOpenUserMenu((prev) => !prev)}
        type="button"
        className="flex rounded-full bg-gray-800 text-sm ring-2 ring-color-base focus:ring-4 focus:ring-color-base md:me-0"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="user-dropdown"
        data-dropdown-placement="bottom"
      >
        <span className="sr-only">Open user menu</span>
        <img
          className="h-8 w-8 rounded-full"
          src={UserImg}
          alt="user photo"
        />
      </button>
      <div
        className={`absolute right-[50%] top-[25px] z-50 my-4 translate-x-[50%] border shadow-lg ${
          openUserMenu ? '' : 'hidden'
        } list-none divide-y divide-gray-100 rounded-lg bg-slate-50 text-base shadow-sm`}
        id="user-dropdown"
      >
        <div className="min-w-[150px] border-b border-b-gray-300 px-2 py-2">
          <p className="block text-nowrap text-center text-sm font-thin text-gray-900">
            {user?.name}
          </p>
        </div>
        <ul
          className="py-2"
          aria-labelledby="user-menu-button"
        >
          <li>
            <NavLink
              to="/allorders"
              className="block rounded-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              All Orders
            </NavLink>
          </li>
          <li className="flex items-center gap-1">
            <NavLink
              to="/wishlist"
              className="block rounded-sm py-2 ps-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              WishList
            </NavLink>
            {userWishList?.count! > 0 && (
              <div className="flex size-4 items-center justify-center rounded-full bg-yellow-300/80 text-xs font-semibold">
                {userWishList?.count}
              </div>
            )}
          </li>
          <li className="flex items-center gap-1">
            <NavLink
              to="/cart"
              className="block rounded-sm py-2 ps-4 text-sm text-gray-700 hover:bg-gray-100 hover:text-emerald-600 md:hover:bg-transparent md:hover:text-emerald-600"
            >
              Cart
            </NavLink>
            {userCart?.numOfCartItems! > 0 && (
              <div className="flex size-4 items-center justify-center rounded-full bg-color-base/80 text-xs text-white">
                {userCart?.numOfCartItems}
              </div>
            )}
          </li>
          <li className="mt-2 px-2 text-center">
            <button
              onClick={() => {
                handleLogout(handleUser);
                navigate('/');
                setUserWishList(null);
                setUserCart(null);
              }}
              type="button"
              className="flex w-full items-center justify-center gap-1 rounded-lg bg-red-600 px-4 py-2 text-center text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-600"
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
