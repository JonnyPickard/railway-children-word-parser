const splitString = (text) => {
  const textArr = text
    .replace('.', '')
    .toLowerCase()
    .split(' ');

  return textArr;
};

const countWords = (wordArr) => {
  const wordsObj = {};

  wordArr.forEach((word) => {
    if (wordsObj[word]) {
      wordsObj[word] += 1;
    } else {
      wordsObj[word] = 1;
    }
  });

  return wordsObj;
};

if (process.env.NODE_ENV === 'test') {
  module.exports = {
    splitString,
    countWords,
  };
}
