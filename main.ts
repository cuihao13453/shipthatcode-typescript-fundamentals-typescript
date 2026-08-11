// Print the greeting below.
function square(n: number): number {
  // Return n * n.
  return n * n;
}

const n: number = Number(require("fs").readFileSync(0, "utf-8").trim());
console.log(square(n));
