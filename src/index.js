import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import promiseMiddleware from 'redux-promise';

import reducers from './reducers'

import Routes from './Routes'

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

 const Root = () => {
  return (
    <Provider store={createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<Root />, document.getElementById('root'));
