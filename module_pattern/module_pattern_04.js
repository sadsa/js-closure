/**
 * Module Pattern using IIFE
 *
 * - Namespace modules to protect against accidental naming conflicts
 * - Public method for creating new Persons
 *
 */

var Namespace = window.Namespace || {};

Namespace.PersonModule = (function() {
  function Person() {
    this.firstName = "Beef";
    this.lastName = "Wellington";
  }

  return {
    createPerson: function() {
      return new Person();
    }
  };
})();

var person = PersonModule.createPerson();

// Try accessing 'private' variables
// on the person object
