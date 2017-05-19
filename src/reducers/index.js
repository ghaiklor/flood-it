import * as TYPES from '../actions/types';
import getAdjacentIndexes from '../common/getAdjacentIndexes';
import generateNewField from '../common/generateNewField';

const MINIMUM_COLORS_COUNT = 3;
const MAXIMUM_COLORS_COUNT = 8;
const MINIMUM_FIELD_SIZE = 6;
const MAXIMUM_FIELD_SIZE = 26;

const initialField = generateNewField(MINIMUM_FIELD_SIZE, MINIMUM_COLORS_COUNT);
const initialState = {
  fieldSize: MINIMUM_FIELD_SIZE,
  colorsCount: MINIMUM_COLORS_COUNT,
  level: 1,
  spentMoves: 0,
  done: 0,
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

      const done = Math.ceil(field.filter(colorIndex => colorIndex === newColor).length * 100 / field.length);

      return Object.assign({}, state, {
        spentMoves: state.spentMoves + 1,
        done: done,
        currentColorIndex: newColor,
        field
      });
    }

    case TYPES.NEW_GAME: {
      const field = generateNewField(state.fieldSize, state.colorsCount);

      return Object.assign({}, state, {spentMoves: 0, done: 0, currentColorIndex: field[0], field});
    }

    case TYPES.INCREASE_DIFFICULTY: {
      let fieldSize = state.fieldSize;
      let colorsCount = state.colorsCount;

      if (fieldSize === MAXIMUM_FIELD_SIZE && colorsCount === MAXIMUM_COLORS_COUNT) return state;

      if (fieldSize === MAXIMUM_FIELD_SIZE) {
        fieldSize = MINIMUM_FIELD_SIZE;
        colorsCount = Math.min(MAXIMUM_COLORS_COUNT, colorsCount + 1);
      } else {
        fieldSize += 1;
      }

      return Object.assign({}, state, {level: state.level + 1, fieldSize, colorsCount});
    }

    case TYPES.DECREASE_DIFFICULTY: {
      let fieldSize = state.fieldSize;
      let colorsCount = state.colorsCount;

      if (fieldSize === MINIMUM_FIELD_SIZE && colorsCount === MINIMUM_COLORS_COUNT) return state;

      if (fieldSize === MINIMUM_FIELD_SIZE) {
        fieldSize = MAXIMUM_FIELD_SIZE;
        colorsCount = Math.max(MINIMUM_COLORS_COUNT, colorsCount - 1);
      } else {
        fieldSize -= 1;
      }

      return Object.assign({}, state, {level: state.level - 1, fieldSize, colorsCount});
    }

    default:
      return state;
  }
}
