import { canMove } from '../../util';
import { moveBlock } from '../../action/action';

const down = (store) => {
  const state = store.getState();
  const cur = state.cur;
  const matrix = state.matrix;
  if (cur) {
    const next = cur.rotate();
    if (canMove(next, matrix)) {
      store.dispatch(moveBlock(next))
    }
  }
}

export default {
  down,
}