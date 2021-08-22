/** @jsxImportSource @emotion/react */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Global, css } from '@emotion/react';
import App from './app/app';
import {BreakPoint} from './const';
import {store} from './store/store';

const globalStyles = css`
  :root {
    --font-regular: "Roboto Regular", "Arial", sans-serif;
    --font-medium: "Roboto Medium", "Arial", sans-serif;
    --font-bold: "Roboto Bold", "Arial", sans-serif;

    --color-dark-fade: rgba(31, 30, 37, 0.3);
    --color-dark-800: #1F1E25;
    --color-dark-700: #2B3C4F;
    --color-dark-600: #394959;
    --color-dark-400: #707C87;
    --color-light: #E0E1EA;
    --color-outline: #C1C2CA;
    --color-background: #F6F7FF;
    --color-accent: #2C36F2;
    --color-accent-dark: #2028B6;
    --color-error: crimson;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  body {
    min-width: ${BreakPoint.PHONE}px;
    margin: 0;
    padding: 0;
    font-family: var(--font-regular);
    font-size: 16px;
    line-height: 140%;
    color: var(--color-dark-800);
  }

  .root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .visually-hidden:not(:focus):not(:active),
  input[type="checkbox"].visually-hidden,
  input[type="radio"].visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    border: 0;
    white-space: nowrap;
    clip-path: inset(100%);
    clip: rect(0 0 0 0);
    overflow: hidden;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Global styles={globalStyles}/>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
