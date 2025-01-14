import React from 'react';
import { Provider } from 'react-redux';

import store from './redux-reducers/store';

const Root = ({ children, initialState = {} }) => (
  <Provider store={store(initialState)}>{children}</Provider>
);

export default Root;