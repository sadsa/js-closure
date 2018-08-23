/**
 * Method Invocation
 *
 * When a function is stored as the property of the object (invoked with a dot . expression) it is called on and is called a method
 *
 * - The method is bound to the object using `this` to retrieve or update values from the object
 * - These methods are highly reusable
 * - Because their context comes from `this` everything is considered public
 *
 */

var myObject = {
  value: 0,
  increment: function(inc) {
    this.value += typeof inc === 'number' ? inc : 1;
  }
};

myObject.increment();
myObject.increment(2);
