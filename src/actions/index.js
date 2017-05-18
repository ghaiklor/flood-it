import * as TYPES from '../actions/types';

/**
 * Creates an action for making a move with selected color.
 *
 * @param {Number} colorIndex Index of a color from {@link COLORS} array
 * @returns {{type: String, color: Number}}
 */
export function runColor(colorIndex) {
  return {type: TYPES.RUN_COLOR, color: colorIndex};
}

/**
 * Creates an action for starting a new game.
 *
 * @returns {{type: String}}
 */
export function newGame() {
  return {type: TYPES.NEW_GAME};
}
