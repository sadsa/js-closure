/**
 * Constructor Invocation
 *
 * When a function is created with `new`, that function contains a link to the function's Prototype
 *
 * - Methods that were created for the prototype function are also available to all instances
 * - This style of constructor pattern is not recommended, we will see better examples
 * - The first letter of a constructor function (in this case Quo) must always be capitalized
 *
 */

// Prototype function
var Quo = function(string) {
  this.status = string;
};

// Create a get_status method for Quo - this will be a public method
Quo.prototype.get_status = function() {
  return this.status;
};

// Create a new instance of Quo
var myQuo = new Quo("happy");

// myQuo is an instance of Quo and has access to the public method get_status
// from it's prototype
console.log(myQuo.get_status());
