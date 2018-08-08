/** 
 * IIFEs with parameters
 * 
 * - Pattern and we see this often in jQuery code and in other libraries as well
 * 
 * ADVANTAGES:
 * 
 * - Any references in the IIFE to document will never need to be looked up beyond the local scope.
 * - Javascript mififiers can shorten argument names
 * 
 * **/

(function IIFE(msg, times) {
    for (var i = 1; i <= times; i++) {
        console.log(msg);
    }
}("Hello!", 5));


// Jquery Example
(function($, global, document) {
    // use $ for jQuery, global for window
    $( document ).ready(function() {
        console.log( "ready!" );
    });
}(jQuery, window, document));