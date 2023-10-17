const fs = require("fs");

// Creating a new file and adding this sentence "Hi i am Asim Ali"
// fs.writeFileSync("read.txt", "Hi i am Asim Ali");

fs.writeFileSync("read.txt", "And my father name is Ismail");

// i used appendFileSync to add a new sentence in read.txt file.
fs.appendFileSync("read.txt", " how are you and i am fine thank you");

// The file that you read use readFileSync to and then write your file name in paranthecis (read.txt)
fs.readFileSync("read.txt")

const buf_data = fs.readFileSync("read.txt");
console.log(buf_data);

org_data = buf_data.toString();

console.log(org_data);
fs.renameSync("read.txt", "readwrite.txt");