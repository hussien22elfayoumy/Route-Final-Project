import { createContext, useContext } from 'react';
import { addProductToCart } from '../utils/api';
import toast from 'react-hot-toast';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  async function handleAddToCart(productId: string) {
    try {
      const res = await addProductToCart(productId);
      toast.success(res.message);
    } catch (err) {
      toast.error((err as Error).message);
    }
  }

  const ctxValue = {
    handleAddToCart,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
