const fs = require('fs');

fs.readFile('file1.txt', 'utf8', (err1, data1) => {
  if (err1) {
    return console.error("Error reading file1:", err1);
  }

  fs.readFile('file2.txt', 'utf8', (err2, data2) => {
    if (err2) {
      return console.error("Error reading file2:", err2);
    }

    const merged = data1 + '\n' + data2;

    fs.writeFile('merged.txt', merged, (err3) => {
      if (err3) {
        return console.error("Error writing merged file:", err3);
      }

      console.log("Files merged successfully.");
    });
  });
});
