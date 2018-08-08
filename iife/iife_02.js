/** 
 * IIFEs and private variables
 * 
 * - Any variables declared inside the IIFE are not visible to the outside world.
 * - No one can access the IIFE from outside
 * - Not polluting the global scope
 * - Forms a shield from other developers changing globals accidentally.
 * 
 * **/

(function IIFE_initGame() {
    // Private variables that no one has access to outside this IIFE
    var _lives;
    var _weapons;
    
    init();

    // Private function that no one has access to outside this IIFE
    function init() {
        _lives = 5;
        _weapons = 10;
    }
})();