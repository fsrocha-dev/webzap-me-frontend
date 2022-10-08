import type { AppProps } from 'next/app';
import { ThemeProvider } from "styled-components";
import light from "../styles/themes/light";

import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import AppContext from '../contexts/AppContext';
import GlobalStyle from '../styles/global';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppContext.Provider value={{}}>
      <ThemeProvider theme={light}>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default MyApp
