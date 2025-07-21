const fs = require('fs');

fs.readFile('source.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error("Error reading source file:", err);
  }
})