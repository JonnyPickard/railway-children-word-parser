const test = require('tape');
const { splitString } = require('../book_parser');

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
