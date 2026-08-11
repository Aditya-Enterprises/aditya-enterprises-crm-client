"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { defaultUser, getCurrentUser, type CurrentUser } from "../utils/current-user";

const CurrentUserContext = createContext<CurrentUser>(defaultUser);

export function CurrentUserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CurrentUser>(defaultUser);

  useEffect(() => {
    const updateUser = () => setUser(getCurrentUser());
    updateUser();
    window.addEventListener("aditya-crm-user-changed", updateUser);
    return () => window.removeEventListener("aditya-crm-user-changed", updateUser);
  }, []);

  return <CurrentUserContext.Provider value={user}>{children}</CurrentUserContext.Provider>;
}

export function useCurrentUser() {
  return useContext(CurrentUserContext);
}
