import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from "styled-components";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import AppContext from '../contexts/AppContext';
import UserContext from '../contexts/UserContext';
import GlobalStyle from '../styles/global';
import light from "../styles/themes/light";
import { getLocalStorageValue } from "./../utils/LocalStorage";

interface ILinkState {
    phone_number: number;
    message: string;
}

function MyApp({ Component, pageProps }: AppProps) {
  const [userLoggedIn, setUserLoggedIn] = useState(null);
  const [LoginModalIsOpen, setLoginModelIsOpen] = useState(false);
  const [registermodalIsOpen, setRegisterModalIsOpen] = useState(false);
  const [qrCodeModalIsOpen, setQrCodeModalIsOpen] = useState(false);
  const [newLink, setNewLink] = useState<ILinkState | undefined>(undefined);
  const [qrCode, setQrCode] = useState<string | null>(null);

  useEffect(() => {
    const checkLoggedUser = getLocalStorageValue('loggedUser')
    checkLoggedUser ? setUserLoggedIn(checkLoggedUser) : null
  }, [])

  return (
    <AppContext.Provider value={
      {
        LoginModalIsOpen,
        setLoginModelIsOpen,
        registermodalIsOpen,
        setRegisterModalIsOpen,
        newLink,
        setNewLink,
        qrCodeModalIsOpen,
        setQrCodeModalIsOpen,
        qrCode, 
        setQrCode
      }}>
      <UserContext.Provider value={{
        userLoggedIn,
        setUserLoggedIn
      }}>
        <ThemeProvider theme={light}>
          <GlobalStyle />
          <Header />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </UserContext.Provider>
      <ToastContainer />
    </AppContext.Provider>
  )
}

export default MyApp
