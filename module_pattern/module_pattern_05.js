/**
 * Module Pattern using IIFE + Prototypal Inheritance
 *
 * - Namespace modules to protect against accidental naming conflicts
 * - Public method for creating instances of a Person 
 * - Uses Prototypal Inheritance to reduce object memory consumption
 *
 */

var Namespace = window.Namespace || {};

Namespace.PersonModule = (function() {
  // Class Declaration
  function Person() {
    this.firstName = "Beef";
    this.lastName = "Wellington";
  }

  // Instance methods
  Person.prototype = {
    getFirstName: function() {
      return this.firstName;
    },
    getLastName: function() {
      return this.lastName;
    },
    setFirstName: function(newFirstName) {
      this.firstName = newFirstName;
    },
    setLastName: function(newLastName) {
      this.lastName = newLastName;
    }
  };

  // Public Methods
  return {
    createPerson: function() {
      return new Person();
    }
  };
})();

var person = PersonModule.createPerson();

// Try accessing 'private' variables
// on the person object
