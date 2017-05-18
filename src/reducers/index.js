import * as TYPES from '../actions/types';

function runColor(state, color) {
  console.log(color);
  return state;
}

export default function floodIt(state, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR:
      return runColor(state, action.color);
    default:
      return state;
  }
}
