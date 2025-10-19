// JavaScript Truthy and Falsy Practice
// ------------------------------------
// The output will be false if the value of a variable is: 
// 0, '', undefined, null, false or NaN

let name = NaN;

console.log("Value of variable:", name);

if (name) {
  console.log("The condition is true");
} else {
  console.log("The condition is false");
}

// ✅ Falsy values in JavaScript:
// false, 0, '', null, undefined, NaN

// ✅ Truthy values examples:
// true, 'hello', 1, -5, [], {}, function(){}

// You can test by changing 'name' above to any other value.
// Example:
// let name = "Shahriar"; // This will print: The condition is true
