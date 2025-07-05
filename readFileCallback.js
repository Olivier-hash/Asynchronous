const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error("Failed to read file:", err);
  }
  console.log("File content:", data);
});
