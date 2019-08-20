import {
  ON_MODAL,
  OFF_MODAL,
  UPDATE_TITLE_COUNTER
} from "../types/modal-types";

export const onModal = () => {
  return {
    type: ON_MODAL,
    payload: true
  }
};

export const offModal = () => {
  return {
    type: OFF_MODAL,
    payload: false
  }
};

export const updateTitleCounter = (event) => (dispatch) => {
  dispatch({
    type: UPDATE_TITLE_COUNTER,
    payload: event.target.value
  });
};