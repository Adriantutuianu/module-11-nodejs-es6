// TODO: Import `maths.js`
const maths = require("./maths.js");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];

const var1 = parseInt(process.argv[3]);
const var2 = parseInt(process.argv[4]);
// TODO: Create a `switch` statement that accepts an `operation` parameter
switch (operation) {
  case "sum":
    console.log(maths.sum(var1, var2));
    break;
  case "difference":
    console.log(maths.difference(var1, var2));
    break;
  case "product":
    console.log(maths.product(var1, var2));
    break;
  case "quotient":
    console.log(maths.quotient(var1, var2));
    break;
  default:
    console.log("Check your math!");
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
