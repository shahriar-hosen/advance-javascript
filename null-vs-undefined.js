// null vs undefined in JavaScript

/**
 * undefined → A variable has been declared but not assigned a value.
 *              It represents something that does not exist *yet*.
 
 * null → An intentional absence of any value.
 *         It’s manually assigned to show “no value” on purpose.
 */


// --- undefined examples ---

// 1. Variable declared but not initialized
let user;
console.log("1. user:", user); // undefined

// 2. Function parameter not passed
function greet(name) {
  console.log("2. Hello,", name); // undefined
}
greet();

// 3. Function without a return statement
function logMessage(msg) {
  console.log("3.", msg);
}
let result = logMessage("Function executed");
console.log("3. result:", result); // undefined

// 4. Accessing a property that doesn’t exist
let person = { name: "Mark" };
console.log("4. person.age:", person.age); // undefined


// --- null examples ---

// 5. Variable intentionally set to null (e.g., waiting for data)
let activeUser = null;
console.log("5. activeUser:", activeUser); // null

// 6. Resetting or clearing data
let sessionUser = { id: 1, name: "Alex" };
sessionUser = null;
console.log("6. sessionUser:", sessionUser); // null

// 7. Function returning null when nothing found
function findUser(id) {
  const users = [{ id: 1, name: "Emma" }];
  const found = users.find(u => u.id === id);
  return found || null; // return null intentionally
}
console.log("7. findUser(1):", findUser(1)); // found → object
console.log("7. findUser(2):", findUser(2)); // not found → null