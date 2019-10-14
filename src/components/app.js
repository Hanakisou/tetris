import React, { Component, PureComponent } from 'react';
import Canvas from '../containers/canvas';
import './app.less';


export default class App extends PureComponent{
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Canvas />
      </div>
    )
  }
}
