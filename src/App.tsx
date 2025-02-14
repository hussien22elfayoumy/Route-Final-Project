import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CartContextProvicer from './contexts/CartContext';
import UserContextProvider from './contexts/UserContext';
import WishListContextProvider from './contexts/WishListContext';
import RoutesProvider from './providers/RoutesProvider';

const queryClient = new QueryClient();

function App() {
  return (
    <UserContextProvider>
      <CartContextProvicer>
        <WishListContextProvider>
          <QueryClientProvider client={queryClient}>
            <RoutesProvider />
            {/* <ReactQueryDevtools initialIsOpen={false} /> */}
          </QueryClientProvider>
        </WishListContextProvider>
      </CartContextProvicer>
    </UserContextProvider>
  );
}

export default App;
