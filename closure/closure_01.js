/** 
 * Understanding Environment Context 
 * 
 * - Global Context
 * - Local Context
 * - Environment Context Stack
 * - Context creation/destruction
 * 
 * **/

var a = 3
function addTwo(x) {
    var ret = x + 2
    return ret
}
var b = addTwo(a)
console.log(b)