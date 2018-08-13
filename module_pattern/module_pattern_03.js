/**
 * Returning Object from a Function
 * 
 * - Define firstName and lastName within function scope
 * - use 'getters' to 'setters' to access private vars
 * - Restrict domain specific variables within a module 
 * 
 */

function createPerson() {
    var _firstName = 'Beef';
    var _lastName = 'Wellington';
    return {
        getFirstName: function() {
            return _firstName
        },
        getLastName: function() {
            return _lastName
        }
    };
}

var person = createPerson();

// Try accessing 'private' variables 
// on the person object 
