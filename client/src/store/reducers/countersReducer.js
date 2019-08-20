import {
  GET_COUNTERS,
  CREATE_COUNTER,
  DELETE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../actions/types';

const INITIAL_STATE = {};

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case GET_COUNTERS:
      return { ...state, ...action.payload };
    case CREATE_COUNTER:
      return { ...state , [action.payload.id]: action.payload};
    case DELETE_COUNTER:
      return { ...state };
    case INCREMENT_COUNTER:
      return { ...state, [action.payload.id]: action.payload };
    case DECREMENT_COUNTER:
      return { ...state, [action.payload.id]: action.payload };
    default: return state;
  }
}
