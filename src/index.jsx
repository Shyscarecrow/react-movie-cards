import React from 'react';
import ReactDOM from 'react-dom';
import promiseMiddleware from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { App } from './App';
import './normalize.scss';
import 'bootstrap/dist/css/bootstrap.css';

import reducer from './store/reducers';

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
