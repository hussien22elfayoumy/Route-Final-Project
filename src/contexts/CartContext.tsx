import { createContext, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UserCartResponse } from '../types/interfaces';
import {
  addProductToCart,
  deleteCartItem,
  deleteUserCart,
  fetchUserCart,
  updateCartItemQty,
} from '../utils/cart-api';
import { useUserCtx } from './UserContext';

interface ICartContext {
  handleAddToCart: (productId: string) => void;
  handleDeleteCartItem: (productId: string) => void;
  handleUpdateCartItem: (productId: string, count: number) => void;
  isAddingToCart: boolean;
  userCart: UserCartResponse | null;
  isLoading: boolean;
  error: string;
  handleDeleteUserCart: () => void;
  isClearingCart: boolean;
  setUserCart: React.Dispatch<React.SetStateAction<UserCartResponse | null>>;
}

const cartContext = createContext<ICartContext>({
  handleAddToCart: () => {},
  handleDeleteUserCart: () => {},
  handleDeleteCartItem: () => {},
  handleUpdateCartItem: () => {},
  isAddingToCart: false,
  userCart: null,
  isLoading: false,
  error: '',
  isClearingCart: false,
  setUserCart: () => {},
});

export default function CartContextProvicer({ children }: Readonly<{ children: React.ReactNode }>) {
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isClearingCart, setIsClearingCart] = useState(false);
  const { user } = useUserCtx();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userCart, setUserCart] = useState<UserCartResponse | null>(null);

  async function getUserCart() {
    try {
      if (!user) return;
      setIsLoading(true);
      const res = await fetchUserCart();
      setUserCart(res);
    } catch (err) {
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
      setUserCart(null);
    } catch (err) {
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
    } finally {
    }
  }

  async function handleUpdateCartItem(productId: string, count: number) {
    if (count === 0) {
      handleDeleteCartItem(productId);
      return;
    }
    try {
      // setIsDeletingCartItem(true);
      const res = await updateCartItemQty(productId, count);
      toast.success(res.message || 'Product Updated successfully');
      setUserCart(res);
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
      // setIsDeletingCartItem(false);
    }
  }

  useEffect(() => {
    getUserCart();
  }, [user]);

  const ctxValue = {
    handleAddToCart,
    isAddingToCart,
    userCart,
    isLoading,
    error,
    handleDeleteUserCart,
    isClearingCart,
    handleDeleteCartItem,
    handleUpdateCartItem,
    setUserCart,
  };

  return <cartContext.Provider value={ctxValue}>{children}</cartContext.Provider>;
}

export function useCartCtx() {
  const ctx = useContext(cartContext);

  return ctx;
}
