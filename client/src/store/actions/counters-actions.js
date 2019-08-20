import axios from 'axios';
import {
  GET_COUNTERS,
  CREATE_COUNTER,
  DELETE_COUNTER,
  INCREMENT_COUNTER,
  DECREMENT_COUNTER
} from '../types/counters-types';

const arrayToObject = (array) =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

const instance = axios.create({
  baseURL: 'http://localhost:3000/api/v1/',
  timeout: 1000
});

export const getCounters = () => async (dispatch) => {
  const response = await instance.get('counters/');
  dispatch({
    type: GET_COUNTERS,
    payload: arrayToObject(response.data),
  })
};

export const createCounter = (title) => async (dispatch) => {
  const response = await instance.post(
    'counter/',
    { title }
    );
  dispatch({
    type: CREATE_COUNTER,
    payload: response.data
  })
};

export const deleteCounter = (id) => async (dispatch) => {
  await instance.delete(
    'counter/',
    { data: {id} }
  );
  const response = await instance.get('counters/');
  console.log(response.data);
  dispatch({
    type: DELETE_COUNTER,
    payload: arrayToObject(response.data),
  })
};

export const incrementCounter = (id) => async (dispatch) => {
  const response = await instance.post(
    'counter/inc/',
    {id}
  );
  dispatch({
    type: INCREMENT_COUNTER,
    payload: response.data,
  })
};

export const decrementCounter = (id, actualCount) => async (dispatch) => {
  console.log('kkk', id, actualCount);
  const response = await instance.post(
    'counter/dec/',
    {id}
  );
  dispatch({
    type: DECREMENT_COUNTER,
    payload: response.data,
  })
};