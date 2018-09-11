/**
 * Event Management
 *
 * An example of capturing triggered events within the components that triggered them.
 *
 */

const $ = require("../node_modules/jquery/dist/jquery.js");

var myControl = (function() {
  var m = function(value) {
    this._storedValue = value;
  };

  m.prototype.trigger = function() {
    $(this).trigger("eventName", [this._storedValue]);
  };

  return m;
})();

var myM = new myControl(1234);

$(myM).on("eventName", function(event, value) {
  console.log(value);
});

myM.trigger();

var myM2 = new myControl("hi");

$(myM2).on("eventName", function(event, value) {
  console.log(value);
});

myM2.trigger();
