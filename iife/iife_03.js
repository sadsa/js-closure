/** 
 * IIFEs with a return value
 * 
 * - IFFE can return a value that can be assigned to a variable!
 * - Intro to the Module Pattern
 * - Can also take arguments
 * 
 * **/

var result = (function() {
    return "From IIFE";
}());

console.log(result); // logs "From IIFE"