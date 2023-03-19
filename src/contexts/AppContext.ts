import React from 'react';
import { AppContextType } from '../@types/appContext';

const defaultState = {
  LoginModalIsOpen: null,
  setLoginModelIsOpen: () => {},
  registermodalIsOpen: null,
  setRegisterModalIsOpen: () => {},
  newLink: null,
  setNewLink: () => {},
  qrCodeModalIsOpen: null,
  setQrCodeModalIsOpen: () => {},
  qrCode: null,
  setQrCode: () => {}
};

const AppContext = React.createContext<AppContextType>(defaultState);

export default AppContext;
