process.env.NODE_ENV = 'test';

const test = require('tape');
const { splitString } = require('../src/book_parser');
const { countWords } = require('../src/book_parser');
const { parseBook } = require('../src/book_parser');

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

test('#parseBook, takes in the text file and returns an object of individual words and their count', (t) => {
  const testString = 'They They were not railway children to begin with.';

  const expectedCount = 2;
  const actualCount = parseBook(testString).they;

  t.equals(expectedCount, actualCount, 'Should correctly count amount of "they" words in string.');
  t.end();
});
