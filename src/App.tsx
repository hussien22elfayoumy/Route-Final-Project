import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './Layouts/MainLayout';
import Cart from './pages/Cart';
import Brands from './pages/Brands';
import Categories from './pages/Categories';
import Products from './pages/Products';
import WishList from './pages/WishList';
import Login from './pages/auth/Login';
import Signup from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import VerifyResetCode from './pages/auth/VerifyResetCode';
import UserContextProvider from './contexts/UserContext';

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
        element: <Login />,
      },
      {
        path: 'sign-up',
        element: <Signup />,
      },
      {
        path: 'forgot-password',
        element: <ForgotPassword />,
      },
      {
        path: 'reset-password',
        element: <ResetPassword />,
      },
      {
        path: 'verify-code',
        element: <VerifyResetCode />,
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

function App() {
  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  );
}

export default App;
