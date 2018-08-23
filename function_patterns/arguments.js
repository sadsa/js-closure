/**
 * Arguments
 *
 * Functions provide a default arguments array which contains all the
 * arguments that were supplied when the function was invoked.
 *
 * - You don't have to know the exact number of arguments when you build a function
 * - You can loop through arguments collection
 * - Is "array-like". Does not contain standard array methods.
 *
 */

var sum = function() {
  var i,
    result = 0;
  for (i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
};

console.log(sum(1, 2, 3, 4, 5));
