const splitString = (text) => {
  const textArr = text
    .replace('.', '')
    .toLowerCase()
    .split(' ');

  return textArr;
};

module.exports = {
  splitString,
};
