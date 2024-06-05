export default function hasValuesFromArray(a_set, an_array) {
  return an_array.every((value) => a_set.has(value));
}
