import Immutable, { List, merge } from 'immutable';
import * as actionType from '../action/action_type';
import { blankLine } from '../util/util';

// const blankMatrix = () => {
//   const matrix = [];
//   for(let i = 0;i<20;i++) {
//     matrix.push(List(blankLine));
//   }
//   return List(matrix);
// }

const initState = Immutable.fromJS({
  // matrix: blankMatrix(),
  // blockType: blockType,
  // blockShape: blockShape,
})

export const tetris = (state = initState, action) => {
  switch (action.type) {
    case actionType.START_GAME:
      return state;
    default:
      return state;
  }
} 