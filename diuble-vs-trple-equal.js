// Example 1: Number vs Boolean
const a = 0;
const b = true;

if (a == b) {
  console.log("1️⃣ (a == b): true");
} else {
  console.log("1️⃣ (a == b): false");
}

if (a === b) {
  console.log("1️⃣ (a === b): true");
} else {
  console.log("1️⃣ (a === b): false");
}

// Example 2: String vs Number
const x = "5";
const y = 5;

if (x == y) {
  console.log("2️⃣ ('5' == 5): true");
} else {
  console.log("2️⃣ ('5' == 5): false");
}

if (x === y) {
  console.log("2️⃣ ('5' === 5): true");
} else {
  console.log("2️⃣ ('5' === 5): false");
}

// Example 3: Boolean vs Number
const c = true;
const d = 1;

if (c == d) {
  console.log("3️⃣ (true == 1): true");
} else {
  console.log("3️⃣ (true == 1): false");
}

if (c === d) {
  console.log("3️⃣ (true === 1): true");
} else {
  console.log("3️⃣ (true === 1): false");
}

// Example 4: null vs undefined
const e = null;
const f = undefined;

if (e == f) {
  console.log("4️⃣ (null == undefined): true");
} else {
  console.log("4️⃣ (null == undefined): false");
}

if (e === f) {
  console.log("4️⃣ (null === undefined): true");
} else {
  console.log("4️⃣ (null === undefined): false");
}

// Example 5: Zero vs False
const g = 0;
const h = false;

if (g == h) {
  console.log("5️⃣ (0 == false): true");
} else {
  console.log("5️⃣ (0 == false): false");
}

if (g === h) {
  console.log("5️⃣ (0 === false): true");
} else {
  console.log("5️⃣ (0 === false): false");
}
