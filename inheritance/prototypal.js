/**
 * Prototypal Inheritance
 *
 * Zero classes, one object inherits from another
 *
 * FEATURES
 * - Compose new objects from other objects and then
 * - Make copies of a base object using Object.create(originalObjectName)
 * - When you then customise the new object , this is differential inheritance,
 * - Differential Inheritance is where you specify the differences from the original object
 *
 */

var myMammal = {
  name: 'Herb the Mammal',
  getName: function() {
    return this.name;
  },
  says: function() {
    return this.saying || '';
  }
}

// Lets make some more Mammals!

var myCat = Object.create(myMammal);
myCat.name = 'Tuxedo';
myCat.saying = 'meow, meow!';
myCat.purr = function (n) {
  var i, p = '';
  for (i = 0; i < n; i++) {
    if (!p) {
      p += 'p';
    }
    p += 'r'
  }
  return p;
};
