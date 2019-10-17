import * as actionType from '../action/action_type';

const initState = false;

export const pause = (state = initState, action) => {
  switch(action.type) {
    case actionType.PAUSE:
      return action.data;
    default:
      return state;
  }
}