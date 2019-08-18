import React from 'react';
import ReactDom from 'react-dom';
import { getRandom1000 } from './utils/random'

import Counter from './components/Counter'

ReactDom.render(
  <Counter random={getRandom1000}/>,
  document.getElementById('app')
);
