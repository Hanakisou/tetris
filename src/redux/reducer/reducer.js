import { combineReducers } from 'redux';
import { tetris } from './tetris';
import { next } from './next';
import { matrix } from './matrix';
import { cur } from './cur';

const reducer = combineReducers({
  tetris,
  next,
  matrix,
  cur,
});

export default reducer;
