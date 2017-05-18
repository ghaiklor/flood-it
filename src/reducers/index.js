import * as TYPES from '../actions/types';
import getAdjacentIndexes from '../common/getAdjacentIndexes';
import generateNewField from '../common/generateNewField';

const INITIAL_FIELD_SIZE = 10;
const INITIAL_COLORS_COUNT = 5;
const initialField = generateNewField(INITIAL_FIELD_SIZE, INITIAL_COLORS_COUNT);
const initialState = {
  fieldSize: INITIAL_FIELD_SIZE,
  colorsCount: INITIAL_COLORS_COUNT,
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
        const {top, right, bottom, left} = getAdjacentIndexes(field.length, curIndex);

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

      return Object.assign({}, state, {spentMoves: 0, currentColorIndex: field[0], field});
    }

    default:
      return state;
  }
}
