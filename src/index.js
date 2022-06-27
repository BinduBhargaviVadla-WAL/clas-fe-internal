import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './state/configureStore/configureStoreDev';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './state/configureStore/configureStoreDev';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*<ConnectedRouter history={history}>
        <App />
      </ConnectedRouter> */}
      <App />
    </Provider>
  </React.StrictMode>
);
