import {
  SET_TOKEN,
  REMOVE_TOKEN,
} from './types';

export const setToken = (token) => ({
  type: SET_TOKEN,
  payload: token,
});

export const removeToken = () => ({ type: REMOVE_TOKEN });
