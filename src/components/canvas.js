import React, { PureComponent } from 'react';
import { List } from 'immutable';
import states from '../redux/control/states';
import { isClear } from '../redux/util/index';

export default class Canvas extends PureComponent{
  constructor(props) {
    super(props);
    this.state = {
      clearLines: false,
      animateColor: 2,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.start();
      states.start();
    }, 1000)
  }
  componentWillReceiveProps(nextProps) {
    const clears = isClear(nextProps.matrix);
    this.setState({
      clearLines: clears,
    })
    if (clears && !this.state.clearLines) {
      this.clearAnimate(clears);
    }
  }
  clearAnimate(clears) {
    const animate = (cb) => {
      setTimeout(() => {
        this.setState({
          animateColor: 0,
        });
        setTimeout(() => {
          this.setState({
            animateColor: 2,
          });
          if (typeof cb === 'function') {
            cb();
          }
        })
      }, 100);
    }
    animate(() => {
      animate(() => {
        animate(() => {
          states.clearLines(this.props.matrix, this.state.clearLines);
        })
      })
    })
  }
  getResult() {
    const { cur } = this.props;
    const { clearLines, animateColor } = this.state;
    let matrix = this.props.matrix;
    const shape = cur.shape;
    const xy = cur.xy;
    if (clearLines) {
      const arr = [...new Array(10)].map(v => v = animateColor);
      clearLines.forEach(idx => {
        matrix = matrix.set(idx, List(arr));
      })
    } else if (shape) {
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
    return (
      matrix.map((v, i) => <div key={`line_${i}`} style={{display: 'flex',}}>
        {
          v.map((each, idx) => <b key={`each_${idx}`} className={each === 1 ? 'c' : each === 2 ? 'd' : null} />)
        }
      </div>)
    )
  }
}