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

    // Getters
    function getFirstName() {
        return this.firstName;
    }

    function getLastName() {
        return this.lastName;
    }

    // Setters
    function setFirstName(newFirstName) {
        this.firstName = newFirstName;
    }

    function setLastName(newLastName) {
        this.lastName = newLastName;
    }

    // Extend Prototype
    Object.extend(Person.prototype, {
		getFirstName,
		getLastName,
		setFirstName,
		setLastName
	})

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
