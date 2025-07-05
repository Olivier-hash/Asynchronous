const fs = require('fs');

const content = "This is content written using callback!";

fs.writeFile('output.txt', content, (err) => {
  if (err) {
    return console.error("Failed to write file:", err);
  }
  console.log("File written successfully.");
});
