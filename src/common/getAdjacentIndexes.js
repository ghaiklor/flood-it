/**
 * Helper function for calculating adjacent indexes in array.
 * It tries to find top, right, bottom and left siblings of a specified index.
 * As a result, it returns an object with indexes of siblings.
 * If sibling is not exists, it returns -1 as an index of that sibling.
 *
 * @param {Array} array Source array where you need to find siblings
 * @param {Number} index Index in specified array
 * @returns {{top: Number, right: Number, bottom: Number, left: Number}}
 */
export default function (array, index) {
  const size = Math.sqrt(array.length);
  const top = (index - size) < 0 ? -1 : (index - size);
  const right = (index === 0 || (index % (size - 1))) ? (index + 1) : -1;
  const bottom = (index + size) > array.length ? -1 : (index + size);
  const left = (index % size) ? (index - 1) : -1;

  return {top, right, bottom, left};
}
