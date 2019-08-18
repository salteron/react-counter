import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '../reducers';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
