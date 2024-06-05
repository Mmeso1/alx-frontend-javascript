export default function cleanSet(aSet, startString) {
  if (
    !aSet
    || !startString
    || !(aSet instanceof Set)
    || typeof startString !== 'string'
  ) {
    return '';
  }

  const string = [...aSet].filter((item) => item.startsWith(startString));
  const newString = string.map((item) => item.replace(startString, ''));
  return ''.concat(newString.join('-'));
}
