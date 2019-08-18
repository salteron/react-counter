import * as actionTypes from '../actionTypes';
import getRandom1000 from '../utils/random'
import axios from 'axios';

export const changeCounterValue = (id, value) => {
  return {type: actionTypes.CHANGE_COUNTER_VALUE, id, value}
};

export const setCounterValue = (id, value) => {
  return {type: actionTypes.SET_COUNTER_VALUE, id, value}
};

export const randomizeCounterValue = (id) => {
  return setCounterValue(id, getRandom1000())
};

export const fetchCounterValue = (id) => (dispatch, getState) => {
  return axios.get('/counter/' + id)
    .then(({data}) => dispatch(setCounterValue(id, data)))
    .catch(() => {});
};

export const createCounter = () => {
  return {type: actionTypes.CREATE_COUNTER}
}
