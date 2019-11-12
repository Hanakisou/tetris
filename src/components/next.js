import React, { PureComponent } from 'react';
import { blockShape } from '../redux/util/util';

const xy = { // 方块在下一个中的坐标
  I: [1, 0],
  L: [0, 0],
  J: [0, 0],
  Z: [0, 0],
  S: [0, 0],
  O: [0, 1],
  T: [0, 0],
};

const empty = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

export default class Next extends PureComponent{
  constructor(props){
    super(props);
    this.state = {
      block: empty,
    }
  }

  componentWillMount() {
    this.build(this.props.next);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.next !== nextProps.next) {
      this.build(nextProps.next);
    }
  }

  build(type) {
    const shape = blockShape[type];
    const block = empty.map(e => ([...e]));
    shape.forEach((m, k1) => {
      m.forEach((n, k2) => {
        if (n) {
          block[k1 + xy[type][0]][k2 + xy[type][1]] = 1;
        }
      });
    })
    this.setState({
      block
    })
  }

  render() {
    const { block } = this.state;
    return(
      <div style={{display: 'flex', flexDirection: 'column', marginLeft: 20}}>
        {
          block.map((arr, k1) => (
            <div key={k1}>
              {
                arr.map((v, k2) => (
                  <b className={v ? 'c' : ''} key={k2} />
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
}