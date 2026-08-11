// Print the greeting below.
const n: number = Number(require("fs").readFileSync(0, "utf-8").trim());
let sum: number = 0;
function sumFn(n: number): void {
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
}
sumFn(n);
console.log(sum);
