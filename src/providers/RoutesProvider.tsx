import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../Layouts/MainLayout';
import Home from '../pages/Home';
import ProtectdRoute from '../components/ProtectdRoute';
import Login from '../pages/auth/Login';
import ForgotPassword from '../pages/auth/ForgotPassword';
import ResetPassword from '../pages/auth/ResetPassword';
import VerifyResetCode from '../pages/auth/VerifyResetCode';
import Products from '../pages/Products';
import ProductsDetails from '../pages/ProductsDetails';
import Cart from '../pages/Cart';
import Brands from '../pages/Brands';
import BrandDetails from '../pages/BrandDetails';
import Categories from '../pages/Categories';
import CategoryDetails from '../pages/CategoryDetails';
import WishList from '../pages/WishList';
import AllOrders from '../pages/AllOrders';
import Checkout from '../pages/Checkout';
import NotFound from '../components/NotFound';
import Signup from '../pages/auth/Signup';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'login',
        element: (
          <ProtectdRoute type="public">
            <Login />
          </ProtectdRoute>
        ),
      },
      {
        path: 'sign-up',
        element: (
          <ProtectdRoute type="public">
            <Signup />
          </ProtectdRoute>
        ),
      },
      {
        path: 'forgot-password',
        element: (
          <ProtectdRoute type="public">
            <ForgotPassword />{' '}
          </ProtectdRoute>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <ProtectdRoute type="public">
            <ResetPassword />{' '}
          </ProtectdRoute>
        ),
      },
      {
        path: 'verify-code',
        element: (
          <ProtectdRoute type="public">
            <VerifyResetCode />{' '}
          </ProtectdRoute>
        ),
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:productId/:category',
        element: <ProductsDetails />,
      },
      {
        path: 'cart',
        element: (
          <ProtectdRoute type="protected">
            <Cart />
          </ProtectdRoute>
        ),
      },
      {
        path: 'brands',
        element: <Brands />,
      },
      {
        path: 'brands/:brandsId/:brand',
        element: <BrandDetails />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
      {
        path: 'categories/:categoryId/:category',
        element: <CategoryDetails />,
      },
      {
        path: 'wishList',
        element: (
          <ProtectdRoute type="protected">
            <WishList />
          </ProtectdRoute>
        ),
      },
      {
        path: 'allorders',
        element: (
          <ProtectdRoute type="protected">
            <AllOrders />
          </ProtectdRoute>
        ),
      },
      {
        path: 'checkout',
        element: (
          <ProtectdRoute type="protected">
            <Checkout />
          </ProtectdRoute>
        ),
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default function RoutesProvider() {
  return <RouterProvider router={router}></RouterProvider>;
}
