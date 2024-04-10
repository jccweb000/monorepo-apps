function firstUpperCase(str) {
  if (!str) return '';
  if (str.length === 1) return str;
  const first = str.slice(0, 1);
  const rest = str.slice(1);
  return first.toUpperCase() + rest;
}
function handleComponentName(fileName) {
  if (fileName.indexOf('-') !== -1) {
    const splitNames = fileName.split('-');
    const uppercaseNames = splitNames.map((item) => {
      return firstUpperCase(item);
    });
    return uppercaseNames.join('');
  }
  return firstUpperCase(fileName);
}

// eslint-disable-next-line no-undef
module.exports = {
  handleComponentName,
};
