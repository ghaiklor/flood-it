import * as TYPES from '../actions/types';

export default function floodIt(state, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR:
      const color = action.color;
      console.log(color);
      return state;
    default:
      return state;
  }
}
