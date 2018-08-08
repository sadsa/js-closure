/**
 * Function Closure
 * 
 * - Guess the result of this code
 * - SHOULD return 1, 1, 1
 * - ACTUALLY returns 1, 2, 3 --- Why?
 * - HINT: The returned function also has its closure scope attached (like a backpack with variables inside)
 * - HINT: Remember lexical scoping: Closure Context => Local Context => Global Context
 * - REMEMBER: Function Definition also contain a closure
 *
 * **/

function createCounter() {
  var counter = 0;
  var myFunction = function() {
    counter = counter + 1;
    return counter;
  };
  return myFunction;
}
var increment = createCounter();
var c1 = increment();
var c2 = increment();
var c3 = increment();
console.log("example increment", c1, c2, c3);

