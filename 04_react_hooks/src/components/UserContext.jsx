import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser(username);
  };

  const logout = () => {
    setUser(null);
  };

  const getUser = () => {
    return user;
  };

  return (
    <UserContext.Provider value={{ user, login, logout, getUser }}>
      {children}
    </UserContext.Provider>
  );
};
