/**
 * Function Inside a Function
 *
 * - Function definitions/scopes are invisible until they are called.
 * - Local execution context created when function is called.
 * - Function has completed once it has encountered a 'return' or 'closing bracket'.
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
