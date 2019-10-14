import store from '../store/store';
import todo from './todo';

const keyboard = {
  37: 'left',
  38: 'rotate',
  39: 'right',
  40: 'down',
};

const boardKeys = Object.keys(keyboard).map(e => parseInt(e, 10));

let keydownActive;

const keydown = (e) => {
  if (e.metaKey || boardKeys.indexOf(e.keyCode) === -1) {
    return;
  }
  const type = keyboard[e.keyCode];
  // if (keydownActive === type) {
  //   return;
  // }
  // keydownActive = type;
  todo[type].down(store);
}

const keyup = (e) => {

}

document.addEventListener('keydown', keydown, true);

document.addEventListener('keyup', keyup, true);
