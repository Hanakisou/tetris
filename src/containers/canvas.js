import { connect } from 'react-redux';
import {
  start_game,

} from '../redux/action/action';
import Canvas from '../components/canvas';

const mapStateToProps = (state) => {
  return state;
}

const setStateToProps = (dispatch) => {
  return {
    start: () => dispatch(start_game()),
  }
}

const canvas = connect(
  mapStateToProps,
  setStateToProps,
)(Canvas);

export default canvas;
