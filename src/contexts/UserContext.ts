import { createContext } from 'react';
import { UserContextType } from '../@types/userContext';

const defaultState = {
  userLoggedIn: null,
  setUserLoggedIn: () => {}
};

const UserContext = createContext<UserContextType>(defaultState);

export default UserContext;
