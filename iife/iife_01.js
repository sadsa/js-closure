/** 
 * IIFE (Immediately Invoked Function Expression)
 * 
 * - Prefixing '!' in-front of the function keyword. 
 * - Enforces JavaScript to treat whatever coming after '!' as an expression.
 * - Variation can be used by replacing '!' with '+', '-', or even '~'
 * 
 * **/

// Variation 1
!function() {
    console.log("Hello from IIFE!");
}();
// Shows the alert "Hello from IIFE!"

// Variation 2
(function() {
    console.log("I am an IIFE!");
}());

// Variation 3
(function namedIIFE() {
    console.log("I am an IIFE, too!");
})();