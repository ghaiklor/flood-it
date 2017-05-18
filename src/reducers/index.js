import * as TYPES from '../actions/types';
import getAdjacentIndexes from '../common/getAdjacentIndexes';
import generateNewField from '../common/generateNewField';

const initialField = generateNewField(14, 3);
const initialState = {
  fieldSize: 10,
  colorsCount: 3,
  spentMoves: 0,
  currentColorIndex: initialField[0],
  field: initialField
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR: {
      const field = [].concat(state.field);
      const oldColor = field[0];
      const newColor = action.color;
      const job = [0];

      while (job.length) {
        const curIndex = job.pop();
        const {top, right, bottom, left} = getAdjacentIndexes(field, curIndex);

        field[curIndex] = newColor;

        if (field[top] === oldColor) job.push(top);
        if (field[right] === oldColor) job.push(right);
        if (field[bottom] === oldColor) job.push(bottom);
        if (field[left] === oldColor) job.push(left);
      }

      return Object.assign({}, state, {spentMoves: state.spentMoves + 1, currentColorIndex: newColor, field});
    }
    case TYPES.NEW_GAME: {
      const field = generateNewField(state.fieldSize, state.colorsCount);

      return Object.assign({}, state, {spentMoves: 0, currentColorIndex: field[0], field: field});
    }
    default:
      return state;
  }
}
