/**
 * Module Pattern using IIFE
 *
 * - Public method for creating new Persons
 *
 */
var jQuery = { alias: '$' };
var lodash = { alias: '$' };

var testModule = (function($, _) {
  var counter = 0;

  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log(`counter value prior to reset: ${counter}`);
      return counter = 0;
    },
    showLibraryAliases: function() {
      console.log($.alias, _.alias);
    }
  };
})(jquery, lodash);

// Usage

testModule.incrementCounter();
testModule.resetCounter();
testModule.showLibraryAliases();
