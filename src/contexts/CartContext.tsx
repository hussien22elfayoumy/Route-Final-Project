import { createContext, useContext, useEffect, useState } from 'react';
import { addProductToCart, fetchUserCart, UserCartResponse } from '../utils/api';
import toast from 'react-hot-toast';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
  addToCartLoading: boolean;
  userCart: UserCartResponse | null;
  isLoading: boolean;
  error: string;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
  addToCartLoading: false,
  userCart: null,
  isLoading: false,
  error: '',
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userCart, setUserCart] = useState<UserCartResponse | null>(null);

  async function handleAddToCart(productId: string) {
    try {
      setAddToCartLoading(true);
      const res = await addProductToCart(productId);
      toast.success(res.message);
      getUserCart();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setAddToCartLoading(false);
    }
  }

  async function getUserCart() {
    try {
      setIsLoading(true);
      const res = await fetchUserCart();
      setUserCart(res);
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  const ctxValue = {
    handleAddToCart,
    addToCartLoading,
    userCart,
    isLoading,
    error,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
