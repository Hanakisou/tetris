import { List } from 'immutable';
import { blockShape, origin } from './util';

class Block {
  constructor(option){
    this.type = option.type;

    if (!option.rotateIndex) {
      this.rotateIndex = 0;
    } else {
      this.rotateIndex = option.rotateIndex;
    }

    if (option.shape) {
      this.shape = option.shape;
    } else {
      this.shape = option.type && List(blockShape[option.type].map(e => List(e)));
    }

    if (!option.xy) {
      switch (option.type) {
        case 'I': // I
          this.xy = List([0, 3]);
          break;
        case 'L': // L
          this.xy = List([-1, 4]);
          break;
        case 'J': // J
          this.xy = List([-1, 4]);
          break;
        case 'Z': // Z
          this.xy = List([-1, 4]);
          break;
        case 'S': // S
          this.xy = List([-1, 4]);
          break;
        case 'O': // O
          this.xy = List([-1, 4]);
          break;
        case 'T': // T
          this.xy = List([-1, 4]);
          break;
        default:
          break;
      }
    } else {
      this.xy = option.xy;
    }
  }
  fall(n = 1) {
    return {
      type: this.type,
      shape: this.shape,
      xy: List([this.xy.get(0) + n, this.xy.get(1)]),
      rotateIndex: this.rotateIndex,
    }
  }
  left() {
    return {
      type: this.type,
      shape: this.shape,
      xy: List([this.xy.get(0), this.xy.get(1) - 1]),
      rotateIndex: this.rotateIndex,
    }
  }
  right() {
    return {
      type: this.type,
      shape: this.shape,
      xy: List([this.xy.get(0), this.xy.get(1) + 1]),
      rotateIndex: this.rotateIndex,
    }
  }
  rotate() {
    const shape = this.shape;
    let result = List([]);
    shape.forEach(m => (
      m.forEach((n, k) => {
        const index = m.size - k - 1;
        if (result.get(index) === undefined) {
          result = result.set(index, List([]));
        }
        const tempK = result.get(index).push(n);
        result = result.set(index, tempK);
      })
    ))
    const nextXy = List([
      this.xy.get(0) + origin[this.type][this.rotateIndex][0],
      this.xy.get(1) + origin[this.type][this.rotateIndex][1],
    ]);
    const nextRotateIndex = this.rotateIndex + 1 >= origin[this.type].length ?
      0 : this.rotateIndex + 1;
    return {
      shape: result,
      type: this.type,
      xy: nextXy,
      rotateIndex: nextRotateIndex,
    };
  }
}

export default Block;