import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Global, css } from '@emotion/core';
import { DefaultSeo } from 'next-seo';
import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  useColorMode,
} from '@chakra-ui/core';
// import Router from 'next/router';

import { flicker, textShadow } from '../styles/animations';
import prismBaseTheme from '../themes/prism/base';
import prismLightTheme from '../themes/prism/light';
import prismDarkTheme from '../themes/prism/dark';
import theme from '../themes/chakra/default';
import MDXComponents from '../components/MDX';
import SEO from '../next-seo.config';

const GlobalStyle = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = {
    dark: theme.colors.blue[500],
    light: theme.colors.white,
  }[colorMode];
  const bgFade = {
    dark: theme.colors.black,
    light: '#fff',
  }[colorMode];
  const bs1 = {
    dark: '1px',
    light: '0',
  }[colorMode];
  const bs2 = {
    dark: '3px',
    light: '0',
  }[colorMode];
  const tfo1 = {
    dark: 0.5,
    light: 0,
  }[colorMode];
  const tfo2 = {
    dark: 0.3,
    light: 0,
  }[colorMode];

  return (
    <>
      <CSSReset />
      <Global
        styles={css`
          ${prismBaseTheme}
          ${colorMode === 'light' ? prismLightTheme : prismDarkTheme};
          ::selection {
            background-color: #47a3f3;
            color: #fefefe;
          }
          html {
            min-width: 360px;
            scroll-behavior: smooth;
          }
          #__next::after {
            content: ' ';
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: rgba(18, 16, 16, 0.1);
            opacity: 0;
            z-index: 2;
            pointer-events: none;
            animation: ${flicker} 0.05s infinite;
          }
          #__next::before {
            content: ' ';
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            background: linear-gradient(
                rgba(18, 16, 16, 0) 50%,
                rgba(0, 0, 0, 0.25) 50%
              ),
              linear-gradient(
                90deg,
                rgba(255, 0, 0, 0.06),
                rgba(0, 255, 0, 0.02),
                rgba(0, 0, 255, 0.06)
              );
            z-index: 2;
            background-size: 100% 2px, 3px 100%;
            pointer-events: none;
          }
          #__next {
            background-color: ${bgColor};
            background: radial-gradient(${bgColor}, ${bgFade});
            animation: ${textShadow({ tfo1, tfo2, bs1, bs2 })} 0.1s infinite;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDXProvider components={MDXComponents}>
        <ColorModeProvider value="dark">
          <GlobalStyle>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
          </GlobalStyle>
        </ColorModeProvider>
      </MDXProvider>
    </ThemeProvider>
  );
};

export default App;
