import React from 'react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import history from './services/history';

import './config/reactotron';

import Routes from './routes';
import { store } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
