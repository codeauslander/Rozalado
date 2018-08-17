import React from 'react';
import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';


import reducers, { tasks } from '../reducers/tasks';

import { Provider } from 'react-redux';

export default ({ children, initialState = {} }) => {
  const store = createStore(
    tasks,
    initialState,
    applyMiddleware(thunk)
  );
  return <Provider store={store}>{children}</Provider>;
}