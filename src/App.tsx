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
import ProtectdRoute from './components/ProtectdRoute';
import AllOrders from './pages/AllOrders';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ProductsDetails from './pages/ProductsDetails';
import CategoryDetails from './pages/CategoryDetails';

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
            <Signup />{' '}
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
        element: <CategoryDetails />,
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
        path: 'all-orders',
        element: (
          <ProtectdRoute type="protected">
            <AllOrders />
          </ProtectdRoute>
        ),
      },
    ],
  },
]);
const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </UserContextProvider>
  );
}

export default App;
