import { blockType } from './util';

const util = {
  getNextType() {
    const len = blockType.length;
    return blockType[Math.floor(Math.random() * len)];
  },
  canMove(next, matrix) {
    const xy = next.xy;
    const shape = next.shape;
    const len = shape.get(0).size;
    return shape.every((m, k1) => (
      m.every((n, k2) => {
        if (xy.get(0) + k1 >= 20) { // bottom
          return false;
        }
        if (xy.get(1) + len > 10) { // right
          return false;
        }
        if (xy.get(1) < 0) { // left
          return false
        }
        if (xy[0] + k1 < 0) { // top
          return true;
        }
        if (n) {
          if (matrix.get(xy.get(0) + k1).get(xy.get(1) + k2)) {
            return false;
          }
          return true
        }
        return true;
      })
    ))
  },
  isOver(matrix) {
    return matrix.get(0).some(n => !!n);
  },
  isClear() {

  }
}

module.exports = util;
