import React, { createContext } from 'react';

const UserContext = createContext();

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider value={`user_${Math.random() * 1000}`}>
      {children}
    </UserContext.Provider>
  );
}
