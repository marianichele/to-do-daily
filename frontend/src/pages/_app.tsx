/* ---------- External ---------- */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import type { AppProps } from 'next/app';

/* ---------- Styles ---------- */
import { default_theme } from '_styles/theme';
import { global as Global } from '_styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={default_theme}>
      <Component {...pageProps} />
      <Global />
    </ThemeProvider>
  );
}

export default MyApp;
