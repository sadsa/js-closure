/**
 * Object Specifiers
 *
 * Sometimes happens that a function takes a list of parameters, making it difficukt
 * to remember the order of arguments.
 *
 */

var f = "buttercup";
var l = "powerpuff";
var c = "townsville";
var p = "x-ray vision";

var heroMaker = function(firstName, lastName, city, power) {
  return {
    fullName: firstName + "" + lastName,
    city: city,
    power: power
  };
};

// Rather than

var myObject = heroMaker(f, l, c, p); // has too many parameters to remember in the right order,

// ... Use use an Object Specifier

var heroMaker2 = function(traits) {
  return {
    name: traits.f + "" + traits.l,
    city: c,
    power: p
  };
};

var myObject2 = heroMaker2({
  first: f,
  last: l,
  city: c,
  power: p
});

// They can now be listed in any order!
