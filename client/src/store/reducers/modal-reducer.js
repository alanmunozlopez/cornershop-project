import {
  ON_MODAL,
  OFF_MODAL, UPDATE_TITLE_COUNTER
} from '../types/modal-types';

const INITIAL_STATE = {
  isOpen: false,
  titleCounter: ''
};

export default ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case ON_MODAL:
      return {...state, isOpen: action.payload};
    case OFF_MODAL:
      return {...state, isOpen: action.payload};
    case UPDATE_TITLE_COUNTER:
      return {...state, titleCounter: action.payload};
    default:
      return state;
  }
}