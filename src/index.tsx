import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';

import './styles/index.scss';

const appContainer = document.getElementById('root');

if (appContainer) {
  const root: any = ReactDOM.createRoot(appContainer);

  root.render(<App />);
}
