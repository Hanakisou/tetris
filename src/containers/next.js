import { connect } from 'react-redux';
import Next from '../components/next';

const mapStateToProps = (state) => {
  return state;
}

const setStateToProps = (dispatch) => {
  return {
    
  }
}

const next = connect(
  mapStateToProps,
  setStateToProps,
)(Next);

export default next;
