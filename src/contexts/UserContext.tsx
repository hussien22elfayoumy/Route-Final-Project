import { createContext, useContext, useState } from 'react';

export interface UserType {
  token: string;
  name: string;
  email: string;
}

interface UserContextType {
  user: UserType | null;
  handleUser: (loggedInUser: UserType) => void;
}
const userContext = createContext<UserContextType>({
  user: null,
  handleUser: () => {},
});

export default function UserContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [user, setUser] = useState<UserType | null>(
    JSON.parse(localStorage.getItem('loggedInUser')!)
  );

  function handleUser(loggedInUser: UserType) {
    setUser(loggedInUser);
  }

  const ctxValue = {
    user,
    handleUser,
  };

  return <userContext.Provider value={ctxValue}>{children}</userContext.Provider>;
}

export function useUserCtx() {
  const ctx = useContext(userContext);

  return ctx;
}
