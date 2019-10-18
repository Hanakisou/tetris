import * as actionType from '../action/action_type';

const initState = 0;

export const clearLines = (state = initState, action) => {
  switch (action.type) {
    case actionType.CLEARLINES:
      return action.data;
    default:
      return state;
  }
}