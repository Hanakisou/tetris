import React, { Component, PureComponent } from 'react';
import Canvas from '../containers/canvas';
import Next from '../containers/next';
import './app.less';


export default class App extends PureComponent{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="con-box">
        <Canvas />
        <Next />
      </div>
    )
  }
}
