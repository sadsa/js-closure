/**
 * Apply Invocation
 *
 * The apply method lets you choose the value to be bound to this
 *
 * - It also takes the parameters for a function in an array
 * - Format: function.apply(valueForThis, arrayOfParamentersForFunction);
 *
 */

var calculator = {
  value: 2
}

function add(num) {
  return num + this.value;
}

var nums = [5, 2]; // parameters for our function
result = add(nums[0])

console.log(result)

















// 1. value of 'this' is null
// 2. 'apply' method passes 5 and 2 to the 'add' method

/**
 * Call Invocation (Alternative)
 *
 * - Similar to .apply() but accepts multiple arguments instead of a array
 * - Format: function.call(valueForThis, arrayOfParamentersForFunction);
 *
 */

var nums2 = [5, 2];
var sum2 = add.call(null, nums2[0], nums2[1]);
