import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import reducers, { tasks } from '../reducers/tasks';

import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    tasks,
    initialState,
    // composeWithDevTools(applyMiddleware(thunk))
    applyMiddleware(thunk)
  );
  return <Provider store={store}>{children}</Provider>;
}