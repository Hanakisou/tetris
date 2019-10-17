import * as actionType from './action_type';
import { getNextType } from '../util/index';
import Block from '../util/block';
import keyboard from './keyboard';

const start_game = () => {
  return {
    type: actionType.START_GAME,
  }
}

const next_block = (next = getNextType()) => {
  return {
    type: actionType.NEXT_BLOCK,
    data: next,
  }
}

const matrix = (data) => {
  return {
    type: actionType.MATRIX,
    data,
  }
}

const moveBlock = (option) => {
  return {
    type: actionType.MOVE_BLOCK,
    data: new Block(option),
  }
}

function pause(data) {
  return {
    type: actionType.PAUSE,
    data,
  };
}

export {
  start_game,
  next_block,
  matrix,
  moveBlock,
  keyboard,
  pause,
}