import React, { PureComponent } from 'react';
import states from '../redux/control/states';

export default class Canvas extends PureComponent{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.start();
      states.start();
    }, 1000)
  }
  getResult() {
    const { cur } = this.props;
    let matrix = this.props.matrix;
    const shape = cur.shape;
    const xy = cur.xy;
    if (shape) {
      shape.forEach((m, k1) => (
        m.forEach((n, k2) => {
          if (n && xy.get(0) + k1 >= 0) {
            let line = matrix.get(xy.get(0) + k1);
            let color;
            color = 1;
            line = line.set(xy.get(1) + k2, color);
            matrix = matrix.set(xy.get(0) + k1, line);
          }
        })
      ));
    }
    return matrix;
  }
  render() {
    const matrix = this.getResult();
    console.log('~~', this.props);
    return (
      matrix.map((v, i) => <div key={`line_${i}`} style={{display: 'flex',}}>
        {
          v.map((each, idx) => <b key={`each_${idx}`} className={each === 1 ? 'c' : each === 2 ? 'd' : null} />)
        }
      </div>)
    )
  }
}