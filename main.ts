const nums: number[] = require("fs")
  .readFileSync(0, "utf-8")
  .trim()
  .split(" ")
  .map(Number);

const max = nums.reduce((max, n) => (n > max ? n : max), nums[0]);
console.log(max);
