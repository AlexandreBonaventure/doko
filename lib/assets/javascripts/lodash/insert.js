export default function insert(array, value, index) {
  return [
    ...array.slice(0, index),
    value,
    ...array.slice(index + 1),
  ]
}
