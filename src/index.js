import React from 'react';
import ReactDom from 'react-dom';
import Counters from './containers/Counters'
import { Provider } from 'react-redux';
import store from './store'

ReactDom.render(
  (
    <Provider store={store}>
      <Counters/>
    </Provider>
  ),
  document.getElementById('app')
);
