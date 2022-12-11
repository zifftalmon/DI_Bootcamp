import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
// import logger from 'redux-logger'

import reportWebVitals from './reportWebVitals';

import { rootReducer } from './redux/reducers.js'

const myLogger = (store) => (next) => (action) => {
  next(action)
  console.log('next state', store.getState());
  // console.log('prev state', store.getState());
}

const store = createStore(rootReducer, applyMiddleware(thunk,myLogger))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
