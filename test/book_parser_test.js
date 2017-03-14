process.env.NODE_ENV = 'test';

const test = require('tape');
const { splitString } = require('../book_parser');
const { countWords } = require('../book_parser');

test('#splitString, creates array of all words in the text', (t) => {
  const testString = 'They were not railway children to begin with.';

  const expectedString1 = 'they';
  const actualString1 = splitString(testString)[0];

  const expectedString2 = 'were';
  const actualString2 = splitString(testString)[1];

  t.equals(actualString1, expectedString1);
  t.equals(actualString2, expectedString2);
  t.end();
});

test('#countWords, takes an array of words then returns an object with each individual word and their count', (t) => {
  const testStringArr = ['they', 'they', 'were', 'not', 'railway', 'children', 'to', 'begin', 'with'];

  const expectedCount = 2;
  const actualCount = countWords(testStringArr).they;

  t.equals(expectedCount, actualCount);
  t.end();
});
