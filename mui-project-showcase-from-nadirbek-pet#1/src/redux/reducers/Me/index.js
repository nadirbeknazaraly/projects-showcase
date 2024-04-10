import {
  SET_TOKEN,
  REMOVE_TOKEN,
} from 'redux/actions/Me/types';

const initalState = { token: null };

export default (state = initalState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return ({
        ...state,
        token: action.payload,
      });
    case REMOVE_TOKEN:
      return ({
        ...state,
        token: initalState.token,
      });
    default:
      return state;
  }
};
