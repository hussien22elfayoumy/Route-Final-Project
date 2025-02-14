import { createContext, useContext, useEffect, useState } from 'react';
import { verifyToken } from '../utils/auth-api';

export interface UserType {
  token: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: UserType | null;
  handleUser: (loggedInUser: UserType | null) => void;
  userId: string;
}
const userContext = createContext<UserContextType>({
  user: null,
  handleUser: () => {},
  userId: '',
});

export default function UserContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(localStorage.getItem('loggedInUser')!)
  );

  const [userId, setUserId] = useState('');

  function handleUser(loggedInUser: UserType | null) {
    setUser(loggedInUser);
  }

  async function handleVerifyToken() {
    try {
      const res = await verifyToken();
      setUserId(res.decoded.id);
    } catch (err) {
      // toast.error((err as Error).message);
      setUser(null);
      localStorage.removeItem('loggedInUser');
    }
  }

  useEffect(() => {
    handleVerifyToken();
  }, []);

  const ctxValue = {
    user,
    handleUser,
    userId,
  };

  return <userContext.Provider value={ctxValue}>{children}</userContext.Provider>;
}

export function useUserCtx() {
  const ctx = useContext(userContext);

  return ctx;
}
