import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

import reducers from './store/reducers';

const store = createStore(
  reducers, // Todos los reducers
  {}, // Estado inicial,
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);
