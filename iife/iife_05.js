/** 
 * Classical JavaScript module pattern
 * 
 * - IIFEs and closures on steroids
 * - Only private functions have access to local scope through closure
 * - IFFE returns an object (Module) that we can access safely.
 * 
 * **/

var Sequence = (function sequenceIIFE() {
    
    // Private variable to store current counter value.
    var current = 0;
    
    // Object that's returned from the IIFE.
    return {
        getCurrentValue: function() {
            return current;
        },
        
        getNextValue: function() {
            current = current + 1;
            return current;
        }
    };
    
}());

console.log(Sequence.getNextValue());
console.log(Sequence.getNextValue());
console.log(Sequence.getCurrentValue());