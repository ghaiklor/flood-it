export default function (size, colors) {
  return Array.from({length: size * size}).map(() => colors[Math.floor(Math.random() * colors.length)]);
}
