/**
 * Helper function for generating a new game field.
 * It creates an array with specified size and fills it with random colors.
 * Colors for game field are specifying as an argument.
 * Keep in mind that game field is a rectangle, so size of a field is actually [size, size].
 *
 * @param {Number} size Size of a game field, i.e. 14
 * @param {Array<String>} colors An array of colors in HEX format
 * @returns {Array} Returns an array of game field with a random colors inside
 */
export default function (size, colors) {
  return Array
    .from({length: size * size})
    .map(() => colors[Math.floor(Math.random() * colors.length)]);
}
