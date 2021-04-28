import {combineReducers} from 'redux';
import home from '../reducers/Home';
import rides from '../reducers/Rides';

const rootReducer = combineReducers({
  home: home,
  rides: rides,
  // form: formReducer,
  // dashboard: dashboard,
});

export default rootReducer;
