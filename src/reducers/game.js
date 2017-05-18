import * as TYPES from '../actions/types';
import COLORS from '../constants/colors';
import getAdjacentIndexes from '../common/getAdjacentIndexes';
import generateNewField from '../common/generateNewField';

const initialField = generateNewField(14, 5);
const initialState = {
  moves: 0,
  currentColor: initialField[0],
  field: initialField
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.RUN_COLOR:
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

      return Object.assign({}, state, {field, currentColor: newColor, moves: state.moves + 1});
    case TYPES.NEW_GAME:
      const newField = generateNewField(14, state.configuration.level);

      return Object.assign({}, state, {field: newField, currentColor: newField[0], moves: 0});
    default:
      return state;
  }
}
