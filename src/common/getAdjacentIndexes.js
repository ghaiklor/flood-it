export default function (array, index) {
  const size = Math.sqrt(array.length);
  const top = index - size;
  const right = (index % (size - 1)) ? index + 1 : -1;
  const bottom = index + size;
  const left = (index % size) ? index - 1 : -1;

  return {top, right, bottom, left};
}
