import { createContext, useContext, useEffect, useState } from 'react';
import { addProductToCart, fetchUserCart, UserCartResponse } from '../utils/api';
import toast from 'react-hot-toast';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
  addToCartLoading: boolean;
  userCart: UserCartResponse | null;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
  addToCartLoading: false,
  userCart: null,
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  const [addToCartLoading, setAddToCartLoading] = useState(false);
  const [userCart, setUserCart] = useState<UserCartResponse | null>(null);

  async function handleAddToCart(productId: string) {
    try {
      setAddToCartLoading(true);
      const res = await addProductToCart(productId);
      toast.success(res.message);
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setAddToCartLoading(false);
    }
  }

  async function getUserCart() {
    try {
      const res = await fetchUserCart();
      console.log(res);
      setUserCart(res);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  const ctxValue = {
    handleAddToCart,
    addToCartLoading,
    userCart,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
