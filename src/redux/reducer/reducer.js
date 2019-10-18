import { combineReducers } from 'redux';
import { tetris } from './tetris';
import { next } from './next';
import { matrix } from './matrix';
import { cur } from './cur';
import { pause } from './pause';
import { clearLines } from './clearLines';

const reducer = combineReducers({
  tetris,
  next,
  matrix,
  cur,
  pause,
  clearLines,
});

export default reducer;
