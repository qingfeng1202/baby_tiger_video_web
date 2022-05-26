import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';

import { RootRouter } from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RootRouter />
  </React.StrictMode>
);
