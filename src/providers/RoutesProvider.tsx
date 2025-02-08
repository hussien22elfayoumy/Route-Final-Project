import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SignUp from '../pages/auth/SignUp';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import Products from '../pages/Products';
import Cart from '../pages/Cart';
import Brands from '../pages/Brands';
import Categories from '../pages/Categories';
import WishList from '../pages/WishList';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
      {
        path: 'forgot-Password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-Password',
        element: <ResetPassword />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'brands',
        element: <Brands />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'wishList',
        element: <WishList />,
      },
    ],
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router}></RouterProvider>;
}
