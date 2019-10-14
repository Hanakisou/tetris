import * as actionType from '../action/action_type';
import Block from '../util/block';

const initState = (() => {
  const option = {
    
  }
  return new Block(option)
})();

export const cur = (state = initState, action) => {
  switch (action.type) {
    case actionType.MOVE_BLOCK:
      return action.data;
    default:
      return state;
  }
}