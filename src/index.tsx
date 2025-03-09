import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { Provider } from 'react-redux';

import store from './redux/store';

import './styles/index.scss';

const appContainer = document.getElementById('root');

if (appContainer) {
  const root: ReactDOM.Root = ReactDOM.createRoot(appContainer);

  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
}
