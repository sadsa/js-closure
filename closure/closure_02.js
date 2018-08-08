/**
 * Lexical Scope
 *
 * - Backwards lookup of scope variables  
 * - Local Context => Calling Context => Global Context 
 * - Lookup until 'undefined'
 * 
 * **/

var val1 = 2;
function multiplyThis(n) {
  var ret = n * val1;
  return ret;
}
var multiplied = multiplyThis(6);
console.log("example of scope:", multiplied);
