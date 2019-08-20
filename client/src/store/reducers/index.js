import { combineReducers } from 'redux';
import countersReducer from './counters-reducer';
import modalReducer from './modal-reducer';

export default combineReducers({
  counters: countersReducer,
  modal: modalReducer
});