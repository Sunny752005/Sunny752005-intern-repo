import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Implementing-Internationalization-with-i18next/i18n/i18n.js';
import App from './Using-Selectors-in-Redux-Toolkit/App.jsx';
import store from './Using-Selectors-in-Redux-Toolkit/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
