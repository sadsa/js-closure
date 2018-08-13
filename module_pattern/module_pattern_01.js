/**
 * Plain JS Objects
 * 
 * - Gives us quick object literal creation
 * - Describes functions that access internal variables
 * - Access to lexical scope
 * - Everything is public
 * 
 */

var person = {
    firstName: 'Beef',
    lastName: 'Wellington',
    getFirstName: function() {
        return this.firstName
    },
    getLastName: function() {
        return this.lastName
    }
}