import {createStore, applyMiddleware} from 'redux';
import app from './reducers/root-reducer';
import thunk from 'redux-thunk';

export default configureStore = () => {
  let store = createStore(app, applyMiddleware(thunk));
  return store;
};
