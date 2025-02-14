import { createContext, useContext, useState } from 'react';
import { addProductToCart } from '../utils/api';
import toast from 'react-hot-toast';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
  addToCartLoading: boolean;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
  addToCartLoading: false,
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  const [addToCartLoading, setAddToCartLoading] = useState(false);

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

  const ctxValue = {
    handleAddToCart,
    addToCartLoading,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
