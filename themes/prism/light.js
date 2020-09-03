import { css, keyframes } from '@emotion/core';

import theme from '../chakra/default';
import { textShadow } from '../../styles/animations';

const dropShadow = keyframes`
  0% {
    box-shadow: 0.4389924193300864px 0 1px rgba(0, 30, 255, 0.1),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  5% {
    box-shadow: 2.7928974010788217px 0 1px rgba(0, 30, 255, 0.1),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  10% {
    box-shadow: 0.02956275843481219px 0 1px rgba(0, 30, 255, 0.1),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  15% {
    box-shadow: 0.40218538552878136px 0 1px rgba(0, 30, 255, 0.1),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  20% {
    box-shadow: 3.4794037899852017px 0 1px rgba(0, 30, 255, 0.1),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  25% {
    box-shadow: 1.6125630401149584px 0 1px rgba(0, 30, 255, 0.1),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  30% {
    box-shadow: 0.7015590085143956px 0 1px rgba(0, 30, 255, 0.1),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  35% {
    box-shadow: 3.896914047650351px 0 1px rgba(0, 30, 255, 0.1),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  40% {
    box-shadow: 3.870905614848819px 0 1px rgba(0, 30, 255, 0.1),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  45% {
    box-shadow: 2.231056963361899px 0 1px rgba(0, 30, 255, 0.1),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  50% {
    box-shadow: 0.08084290417898504px 0 1px rgba(0, 30, 255, 0.1),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  55% {
    box-shadow: 2.3758461067427543px 0 1px rgba(0, 30, 255, 0.1),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  60% {
    box-shadow: 2.202193051050636px 0 1px rgba(0, 30, 255, 0.1),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  65% {
    box-shadow: 2.8638780614874975px 0 1px rgba(0, 30, 255, 0.1),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  70% {
    box-shadow: 0.48874025155497314px 0 1px rgba(0, 30, 255, 0.1),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  75% {
    box-shadow: 1.8948491305757957px 0 1px rgba(0, 30, 255, 0.1),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  80% {
    box-shadow: 0.0833037308038857px 0 1px rgba(0, 30, 255, 0.1),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  85% {
    box-shadow: 0.09769827255241735px 0 1px rgba(0, 30, 255, 0.1),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  90% {
    box-shadow: 3.443339761481782px 0 1px rgba(0, 30, 255, 0.1),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  95% {
    box-shadow: 2.1841838852799786px 0 1px rgba(0, 30, 255, 0.1),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
  100% {
    box-shadow: 2.6208764473832513px 0 1px rgba(0, 30, 255, 0.1),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.1), 0 0 3px;
  }
`;

export default css`
  .remark-code-title {
    border-color: ${theme.colors.black};
    color: ${theme.colors.black};
  }

  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    color: #444;
    border-color: #000;
    line-height: 1.5em;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  code[class*='language-'],
  pre[class*='language-'],
  code[class*='language-'] .token,
  pre[class*='language-'] .token {
    text-shadow: none;
  }

  :not(pre) > code[class*='language-'],
  pre[class*='language-'],
  .remark-code-title {
    animation: ${dropShadow} 1.6s infinite;
  }

  code[class*='language-']::-moz-selection,
  pre[class*='language-']::-moz-selection,
  code[class*='language-'] ::-moz-selection,
  pre[class*='language-'] ::-moz-selection {
    background: #cceae7;
    color: #263238;
  }

  code[class*='language-']::selection,
  pre[class*='language-']::selection,
  code[class*='language-'] ::selection,
  pre[class*='language-'] ::selection {
    background: #cceae7;
    color: #263238;
  }

  :not(pre) > code[class*='language-'] {
    white-space: normal;
    border-radius: 0.2em;
    padding: 0.1em;
  }

  pre[class*='language-'] {
    overflow: auto;
    position: relative;
    margin: 0.1em 0;
    padding: 1.25em 1em;
  }

  .language-css > code,
  .language-sass > code,
  .language-scss > code {
    color: #f76d47;
  }

  [class*='language-'] .namespace {
    opacity: 0.7;
  }

  .token.atrule {
    color: #7c4dff;
  }

  .token.attr-name {
    color: #39adb5;
  }

  .token.attr-value {
    color: #f6a434;
  }

  .token.attribute {
    color: #f6a434;
  }

  .token.boolean {
    color: #7c4dff;
  }

  .token.builtin {
    color: #39adb5;
  }

  .token.cdata {
    color: #39adb5;
  }

  .token.char {
    color: #39adb5;
  }

  .token.class {
    color: #39adb5;
  }

  .token.class-name {
    color: #6182b8;
  }

  .token.comment {
    color: #aabfc9;
  }

  .token.constant {
    color: #7c4dff;
  }

  .token.deleted {
    color: #e53935;
  }

  .token.doctype {
    color: #aabfc9;
  }

  .token.entity {
    color: #e53935;
  }

  .token.function {
    color: #7c4dff;
  }

  .token.hexcode {
    color: #f76d47;
  }

  .token.id {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.important {
    color: #7c4dff;
    font-weight: bold;
  }

  .token.inserted {
    color: #39adb5;
  }

  .token.keyword {
    color: #7c4dff;
  }

  .token.number {
    color: #f76d47;
  }

  .token.operator {
    color: #39adb5;
  }

  .token.prolog {
    color: #aabfc9;
  }

  .token.property {
    color: #39adb5;
  }

  .token.pseudo-class {
    color: #f6a434;
  }

  .token.pseudo-element {
    color: #f6a434;
  }

  .token.punctuation {
    color: #39adb5;
  }

  .token.regex {
    color: #6182b8;
  }

  .token.selector {
    color: #e53935;
  }

  .token.string {
    color: #f6a434;
  }

  .token.symbol {
    color: #7c4dff;
  }

  .token.tag {
    color: #e53935;
  }

  .token.unit {
    color: #f76d47;
  }

  .token.url {
    color: #e53935;
  }

  .token.variable {
    color: #e53935;
  }
`;
