import { createContext, useContext, useEffect, useState } from 'react';
import { fetchUserWishList, UserWishListResponse } from '../utils/wishlist';

interface WishListCxtType {
  isLoading: boolean;
  error: string;
  userWishList: UserWishListResponse | null;
}
const WishListContext = createContext<WishListCxtType>({
  isLoading: false,
  error: '',
  userWishList: null,
});

export default function WishListContextProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [userWishList, setUserWishList] = useState<UserWishListResponse | null>(null);

  async function getUserWishList() {
    try {
      setIsLoading(true);
      const res = await fetchUserWishList();
      console.log(res);
      setUserWishList(res);
    } catch (err) {
      console.log(err);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserWishList();
  }, []);

  const ctxValue = {
    isLoading,
    error,
    userWishList,
  };

  return <WishListContext.Provider value={ctxValue}>{children}</WishListContext.Provider>;
}

export function useWishListContext() {
  const ctx = useContext(WishListContext);

  return ctx;
}
