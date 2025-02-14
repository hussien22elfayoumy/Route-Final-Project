import { createContext, useContext, useEffect, useState } from 'react';
import {
  addProductToWishList,
  fetchUserWishList,
  removeProductFormWishList,
} from '../utils/wishlist-api';
import toast from 'react-hot-toast';
import { UserWishListResponse } from '../types/interfaces';
import { useUserCtx } from './UserContext';

interface WishListCxtType {
  isLoading: boolean;
  error: string;
  userWishList: UserWishListResponse | null;
  handleAddProductToWishList: (productId: string) => void;
  handleDeleteProductFromWishList: (productId: string) => void;
}
const WishListContext = createContext<WishListCxtType>({
  isLoading: false,
  error: '',
  userWishList: null,
  handleAddProductToWishList: () => {},
  handleDeleteProductFromWishList: () => {},
});

export default function WishListContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userWishList, setUserWishList] = useState<UserWishListResponse | null>(null);
  const { user } = useUserCtx();

  async function getUserWishList() {
    try {
      if (!user) return;
      setIsLoading(true);
      const res = await fetchUserWishList();
      setUserWishList(res);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleAddProductToWishList(productId: string) {
    try {
      const res = await addProductToWishList(productId);
      toast.success(res.message || 'Product removed successfully');
      getUserWishList();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
    }
  }

  async function handleDeleteProductFromWishList(productId: string) {
    try {
      const res = await removeProductFormWishList(productId);

      toast.success(res.message || 'Product removed successfully');
      getUserWishList();
    } catch (err) {
      toast.error((err as Error).message);
    } finally {
    }
  }

  useEffect(() => {
    getUserWishList();
  }, []);

  const ctxValue = {
    isLoading,
    error,
    userWishList,
    handleAddProductToWishList,
    handleDeleteProductFromWishList,
  };

  return <WishListContext.Provider value={ctxValue}>{children}</WishListContext.Provider>;
}

export function useWishListContext() {
  const ctx = useContext(WishListContext);

  return ctx;
}
