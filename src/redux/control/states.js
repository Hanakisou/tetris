import { List } from 'immutable';
import store from '../store/store';
import * as actions from '../action/action';
import { blankLine } from '../util/util';
import { canMove, isOver, isClear } from '../util/index';

const getStartMatrix = () => {
    const matrix = [];
    for(let i = 0;i<20;i++) {
      matrix.push(List(blankLine));
    }
    return List(matrix);
}

const states = {
  fallInterval: null,
  start: () => {
    const state = store.getState();
    const startMatrix = getStartMatrix();
    store.dispatch(actions.matrix(startMatrix));
    store.dispatch(actions.moveBlock({type: state.next}));
    store.dispatch(actions.next_block());
    states.auto();
  },
  auto: (timeout) => {
    const out = (timeout < 0 ? 0 : timeout);
    let state = store.getState();
    let cur = state.cur;
    const fall = () => {
      state = store.getState();
      cur = state.cur;
      const next = cur.fall();
      if (canMove(next, state.matrix)) {
        store.dispatch(actions.moveBlock(next));
        states.fallInterval = setTimeout(fall, 800);
      } else {
        let matrix = state.matrix;
        const shape = cur && cur.shape;
        const xy = cur && cur.xy;
        shape.forEach((m, k1) => (
          m.forEach((n, k2) => {
            if (n && xy.get(0) + k1 >= 0) {
              let line = matrix.get(xy.get(0) + k1);
              line = line.set(xy.get(1) + k2, 1);
              matrix = matrix.set(xy.get(0) + k1, line);
            }
          }) 
        ))
        states.nextAround(matrix);
      }
    };
    clearTimeout(states.fallInterval);
    states.fallInterval = setTimeout(fall, out ? out : 800);
  },
  nextAround: (matrix) => {
    clearTimeout(states.fallInterval);
    store.dispatch(actions.matrix(matrix));

    if (isOver(matrix)) {
      states.overStart();
      return;
    }

    setTimeout(() => {
      store.dispatch(actions.moveBlock({ type: store.getState().next }));
      store.dispatch(actions.next_block());
      states.auto();
    }, 100);
  },
  pause: (isPause) => {
    store.dispatch(actions.pause(isPause));
    if (isPause) {
      clearTimeout(states.fallInterval);
      return;
    }
    states.auto();
  },
  overStart() {
    clearTimeout(states.fallInterval);
  }
}

export default states;
