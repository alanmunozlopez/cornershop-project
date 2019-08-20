import { combineReducers } from 'redux';
import countersReducer from './countersReducer';

export default combineReducers({
  counters: countersReducer,
});