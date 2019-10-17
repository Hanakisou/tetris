import { combineReducers } from 'redux';
import { tetris } from './tetris';
import { next } from './next';
import { matrix } from './matrix';
import { cur } from './cur';
import { pause } from './pause';

const reducer = combineReducers({
  tetris,
  next,
  matrix,
  cur,
  pause,
});

export default reducer;
