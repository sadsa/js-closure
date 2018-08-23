/**
 * Function Invocation
 *
 * When a function is not the property of an object, it is invoked as a function
 *
 * - add() is bound to the global object (a "mistake in the design of the language" according to Douglas Crockford)
 * - Invoking this within an inner function will therefore refer to its own `this` and not the one in global scope
 *
 */

function add(num, num2) {
  return num + num2;
}

var myObject = {
  value: 2
};

myObject.double = function() {
  var innerFunc = function() {
    this.value = add(this.value, this.value);
  };

  innerFunc(); // invoke innerFunc as function
};

myObject.double();
console.log(myObject.value); // myObject.value was not updated!


/**
 * How to we fix this?
 *
 */

