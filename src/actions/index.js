import * as TYPES from './types';

export function runColor(color) {
  return {type: TYPES.RUN_COLOR, color};
}
