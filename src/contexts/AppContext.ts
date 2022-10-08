import React from 'react';
import { AppContextType } from '../@types/appContext';

const AppContext = React.createContext<AppContextType | null>(null);

export default AppContext;
