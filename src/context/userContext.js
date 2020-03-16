import React, { createContext } from 'react';
import { generateRandomId } from '../utils/utils';

export const UserContext = createContext();

export default function UserProvider({ children }) {
  return (
    <UserContext.Provider value={`user_${generateRandomId()}`}>
      {children}
    </UserContext.Provider>
  );
}
