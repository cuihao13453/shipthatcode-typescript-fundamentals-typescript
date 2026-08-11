// Print the greeting below.
interface User {
  name: string;
  age: number;
}

const lines: string[] = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split("\n");
const u: User = { name: lines[0], age: Number(lines[1]) };
console.log(`Hi, ${u.name}! You are ${u.age} years old.`);
