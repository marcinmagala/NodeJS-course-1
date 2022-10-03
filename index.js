const fs = require("fs");

// Synchronous way
const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is new text: ${textIn}.\nCreated on ${Date.now()} ///${new Date()}`;
fs.writeFileSync("./txt/output.txt", textOut);

// Asynchronous way

fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  if (err) {
    return console.log(err);
  }
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    if (err) {
      return console.log(err);
    }
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      if (err) {
        return console.log(err);
      }

      fs.writeFile("./txt/final.txt", data2 + data3, (err) => {
        if (err) {
          return console.log(err);
        }
        console.log("File was created!");
      });
    });
  });
});

console.log("Reading files start.txt...");
