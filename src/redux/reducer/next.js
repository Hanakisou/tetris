import { getNextType } from '../util/index';
import * as actionType from '../action/action_type';

const initState = getNextType();

export const next = (state = initState, action) => {
  switch (action.type) {
    case actionType.NEXT_BLOCK:
      return action.data;
    default:
      return state;
  }
}