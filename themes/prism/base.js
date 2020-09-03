import { css } from '@emotion/core';

import theme from '../chakra/default';

export default css`
  code {
    white-space: pre;
  }

  code[class*='language-'],
  pre[class*='language-'] {
    width: 100%;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'] {
    border: 2px solid ${theme.colors.white};
    /* border-top: none; */
    /* border-image-source: conic-gradient(
      ${theme.colors
      .pink[800]},
      ${theme.colors.purple[900]},
      ${theme.colors
      .pink[800]}
    ); */
    border-image-slice: 1;
    font-size: 1.2rem;
  }

  .remark-code-title {
    padding: ${theme.space[2]} ${theme.space[4]};
    font-family: ${theme.fonts.mono};
    background: transparent;
    color: ${theme.colors.white};
    border: 2px solid ${theme.colors.white};
    border-bottom: none;
    font-weight: 600;
    margin-top: 1rem;
    margin-bottom: 0;
    width: 100%;

    ::before {
      content: '> ';
    }

    ::after {
      content: '_';
      animation: blink-animation 1s steps(2, start) infinite;
      -webkit-animation: blink-animation 1s steps(2, start) infinite;
    }

    @keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }
    @-webkit-keyframes blink-animation {
      to {
        visibility: hidden;
      }
    }

    + pre {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
      margin-top: 0 !important;
    }
  }
`;
