/**
 * Returning Object from a Function
 *
 * PROS
 * - Simple abstraction from Object Literal
 * - Closure Scope of the returned createPerson function
 *   allows us to emulate private variables in JavaScript
 *
 * CONS
 * - Still has access
 *
 */

function createPerson() {
  // private members
  var _firstName = "Beef";
  var _lastName = "Wellington";

  // public API
  var returnObj = {
    getFirstName: function() {
      return _firstNamel;
    },
    getLastName: function() {
      return _lastName;
    }
  };
  return returnObj;
}

var person = createPerson();
