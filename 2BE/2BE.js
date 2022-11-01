const fs = require("fs");
let text = fs.readFileSync("2dele.txt", "utf-8");
text = text.replace("browser ", "Rohan ");

console.log("The content of the file is");
console.log(text);

console.log("Creating a new file...");
fs.writeFileSync("2rohan.txt", text);

// There are three modules
// i. Built in modules
// ii. We can make ourselfs
// iii.We can install from third party(npm)
// JavaScript m libraries hoti h & Node m modules add krte h