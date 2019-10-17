import states from '../states';
// import { pause } from '../../action/action';

const down = (store) => {
  // store.dispatch(pause(true));
  const state = store.getState();
  states.pause(!state.pause);
}

export default {
  down,
};
