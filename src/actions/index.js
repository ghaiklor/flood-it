import * as TYPES from '../actions/types';

/**
 * Creates an action for making a move with selected color.
 *
 * @param {Number} colorIndex Index of a color from {@link COLORS} array
 * @returns {Function} Returns a redux-thunk function
 */
export function runColor(colorIndex) {
  return function (dispatch, getState) {
    dispatch({type: TYPES.RUN_COLOR, color: colorIndex});

    const {fieldSize, colorsCount, spentMoves, done} = getState();
    const maxMoves = Math.floor(25 * ((fieldSize + fieldSize) * colorsCount) / ((14 + 14) * 6));

    if (done === 100) return dispatch(increaseDifficulty()) && dispatch(newGame());
    if (spentMoves >= maxMoves) return dispatch(decreaseDifficulty()) && dispatch(newGame());
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

/**
 * Creates an action for increasing a difficulty level in a game.
 *
 * @returns {{type: String}}
 */
export function increaseDifficulty() {
  return {type: TYPES.INCREASE_DIFFICULTY};
}

/**
 * Creates an action for decreasing a difficulty level in a game.
 *
 * @returns {{type: String}}
 */
export function decreaseDifficulty() {
  return {type: TYPES.DECREASE_DIFFICULTY};
}
