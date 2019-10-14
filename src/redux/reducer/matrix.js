import * as actionType from '../action/action_type';
import { blankMatrix } from '../util/util';

const initState = blankMatrix;

export const matrix = (state = initState, action) => {
  switch (action.type) {
    case actionType.MATRIX:
      return action.data;
    default:
      return state;
  }
}