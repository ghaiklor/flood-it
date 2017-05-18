import * as TYPES from './types';

/**
 * Creates an action for making a move with selected color.
 *
 * @param {String} color Color in HEX format, i.e. #FFFFFF
 * @returns {{type: String, color: String}}
 */
export function runColor(color) {
  return {type: TYPES.RUN_COLOR, color};
}

/**
 * Creates an action for starting a new game.
 *
 * @returns {{type: String}}
 */
export function newGame() {
  return {type: TYPES.NEW_GAME};
}
