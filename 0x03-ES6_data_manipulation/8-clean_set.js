export default function cleanSet(aSet, startString) {
  if (startString === '') {
    return '';
  }

  const string = [...aSet].filter((item) => item.startsWith(startString));
  const newString = string.map((item) => item.replace(startString, ''));
  return ''.concat(newString.join('-'));
}
