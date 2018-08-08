/**
 * Function Inside a Function
 *
 * - function definitions/scopes are invisible until they are called.
 * - local execution context created.
 * - function done once it has encountered a 'return' or 'closing bracket'.
 * 
 * **/

var val = 7;
function createAdder() {
  function addNumbers(a, b) {
    var ret = a + b;
    return ret;
  }
  return addNumbers;
}
var adder = createAdder();
var sum = adder(val, 8);
console.log("example of function returning a function: ", sum);
