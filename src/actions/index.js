import * as TYPES from '../actions/types';

/**
 * Creates an action for making a move with selected color.
 *
 * @param {Number} colorIndex Index of a color from {@link COLORS} array
 * @returns {{type: String, color: Number}}
 */
export function runColor(colorIndex) {
  return function (dispatch, getState) {
    const {fieldSize, colorsCount, spentMoves, done} = getState();
    const maxMoves = Math.floor(25 * ((fieldSize + fieldSize) * colorsCount) / ((14 + 14) * 6));

    if (spentMoves >= maxMoves - 1) return dispatch(decreaseDifficulty()) && dispatch(newGame());
    if (done === 100) return dispatch(increaseDifficulty()) && dispatch(newGame());

    return dispatch({type: TYPES.RUN_COLOR, color: colorIndex});
  }
}

/**
 * Creates an action for starting a new game.
 *
 * @returns {{type: String}}
 */
export function newGame() {
  return {type: TYPES.NEW_GAME};
}

export function increaseDifficulty() {
  return {type: TYPES.INCREASE_DIFFICULTY};
}

export function decreaseDifficulty() {
  return {type: TYPES.DECREASE_DIFFICULTY};
}
