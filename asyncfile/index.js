import fs from "node:fs/promises";

const file = await fs.readFile("./data.txt");

const text = file.toString();

const wordsLen = text.split(" ").length;

console.log(`data.txt has ${wordsLen} words in it`);
