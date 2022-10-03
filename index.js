const fs = require("fs");

const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

console.log(textIn);

const textOut = `This is new text: ${textIn}.\nCreated on ${Date.now()} ///${new Date()}`;
fs.writeFileSync("./txt/output.txt", textOut);
