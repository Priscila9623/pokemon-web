import React from 'react';

import 'antd/dist/reset.css';
import ReactDOM from 'react-dom/client';

import '@theme/style.scss';

import App from './App';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
