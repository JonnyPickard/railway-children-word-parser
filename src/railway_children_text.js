const fs = require('fs');
const path = require('path');

const str = fs.readFileSync(path.join(__dirname, 'railway_children_text.txt'), 'utf8');

// Remove new line characters
const text = str.replace(/\r?\n|\r/g, ' ');

module.exports = text;
