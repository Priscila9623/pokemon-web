import React from 'react';

import ReactDOM from 'react-dom/client';

import '@theme/breakpoints.scss';
import '@theme/colors.scss';

import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
