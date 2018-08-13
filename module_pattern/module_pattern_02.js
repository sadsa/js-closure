/**
 * Returning Object from a Function
 * 
 * - Same as previous example
 * - createPerson returns an object and the 
 *   Closure Scope of the createPerson function 
 * - firstName and lastName are still public
 * 
 */

function createPerson() {
    var returnObj = {
        firstName: 'Beef',
        lastName: 'Wellington',
        getFirstName: function() {
            return this.firstName
        },
        getLastName: function() {
            return this.lastName
        }
    };
    return returnObj;
}

var person = createPerson();