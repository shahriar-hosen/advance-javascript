// map creates a new array by applying a function to the each element of the original array.
const number = [2, 3, 5, 6, 7, 8, 9]
// const square = []
// for (let i = 0; i < number.length; i++) {
//     const element = number[i];
//     const result = element * element
//     square.push(result)
// }

const square = number.map(x => x * x )
console.log(square)

const double = number.map(function (element) {
    return element * 2
})
console.log(double)

const triple = number.map(x => x * 3)
console.log(triple)

// filter creates a new array conataining only elements that pass a given test.

const even =  number.filter(x => x % 2 === 0)
console.log(even)

const odd = number.filter(x => x % 2 === 1)
console.log(odd)

// find returns the first element in an array that satisfies a given condition. If no elements mathces, it returnsa undefined.

const firstOdd = number.find(x => x % 2 === 1)
console.log(firstOdd)

const firstEven = number.find(x=> x % 2 === 0)
console.log(firstEven)

