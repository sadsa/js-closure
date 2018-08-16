/**
 * Object Literals
 *
 * PROS
 * - Gives us quick object literal creation
 * - Describes functions that access internal variables
 * - Access to lexical scope
 *
 * CONS
 * - Everything is public
 * - Easily overwriteable
 * - Shared members will be duplicated across all instances
 *
 */

var person = {
  firstName: "Beef",
  lastName: "Wellington",
  getFirstName: function() {
    return this.firstName;
  },
  getLastName: function() {
    return this.lastName;
  }
};
