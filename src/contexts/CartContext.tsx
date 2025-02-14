import { createContext, useContext, useEffect, useState } from 'react';
import {
  addProductToCart,
  deleteCartItem,
  deleteUserCart,
  fetchUserCart,
  UserCartResponse,
} from '../utils/api';
import toast from 'react-hot-toast';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
  handleDeleteCartItem: (productId: string) => void;
  isAddingToCart: boolean;
  userCart: UserCartResponse | null;
  isLoading: boolean;
  error: string;
  handleDeleteUserCart: () => void;
  isClearingCart: boolean;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
  handleDeleteUserCart: () => {},
  handleDeleteCartItem: () => {},
  isAddingToCart: false,
  userCart: null,
  isLoading: false,
  error: '',
  isClearingCart: false,
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isClearingCart, setIsClearingCart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userCart, setUserCart] = useState<UserCartResponse | null>(null);

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

  async function handleAddToCart(productId: string) {
    try {
      setIsAddingToCart(true);
      const res = await addProductToCart(productId);
      toast.success(res.message);
      getUserCart();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      setIsAddingToCart(false);
    }
  }

  async function handleDeleteUserCart() {
    try {
      setIsClearingCart(true);

      const res = await deleteUserCart();
      toast.success(res.message);
      getUserCart();
    } catch (err) {
      console.log(err);
      toast.error((err as Error).message);
    } finally {
      setIsClearingCart(false);
    }
  }

  async function handleDeleteCartItem(productId: string) {
    try {
      const res = await deleteCartItem(productId);
      toast.success(res.message || 'Product removed successfully');
      setUserCart(res);
    } catch (err) {
      toast.error((err as Error).message);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  const ctxValue = {
    handleAddToCart,
    isAddingToCart,
    userCart,
    isLoading,
    error,
    handleDeleteUserCart,
    isClearingCart,
    handleDeleteCartItem,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
