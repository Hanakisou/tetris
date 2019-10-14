import * as actionType from './action_type';

const left = (data) => {
  return {
    type: actionType.KEY_LEFT,
    data,
  }
}

const right = (data) => {
  return {
    type: actionType.KEY_RIGHT,
    data,
  }
}

export default {
  left,
  right
}