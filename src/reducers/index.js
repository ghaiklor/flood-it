import * as TYPES from '../actions/types';

function getAdjacents(array, index) {
  const size = Math.sqrt(array.length);
  const top = index - size;
  const right = index + 1;
  const bottom = index + size;
  const left = index - 1;

  return {top, right, bottom, left};
}

export default function floodIt(state, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR:
      const field = [].concat(state.field);
      const oldColor = field[0];
      const newColor = action.color;
      const job = [0];

      while (job.length) {
        const curIndex = job.pop();
        const {top, right, bottom, left} = getAdjacents(field, curIndex);

        field[curIndex] = newColor;

        if (field[top] === oldColor) job.push(top);
        if (field[right] === oldColor) job.push(right);
        if (field[bottom] === oldColor) job.push(bottom);
        if (field[left] === oldColor) job.push(left);
      }

      return Object.assign({}, state, {field, currentColor: newColor});
    default:
      return state;
  }
}
