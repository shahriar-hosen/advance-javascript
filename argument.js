function add (a, b) {
    console.log([...arguments])
    return a + b
    
}
const result = add(2, 4, 7, 77)
console.log(result)

function addition(x, y) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        total = total + element
    }
    return total
}
const first = addition(33, 55, 55, 100)
console.log(first)