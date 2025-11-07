const students = [
  {id: 12, name: 'Arnob'},
  {id: 33, name: 'Nihat'},
  {id: 45, name: 'Nishat'}
];
//  const names = []
//  for (let i = 0; i < students.length; i++) {
//     const element = students[i];
//     const firstName = element.name
//     names.push(firstName)
//  }
const names = students.map(x => x.name)
console.log(names)

const ids = students.map(x => x.id)
console.log(ids)

const bigger = students.filter(x => x.id > 21);
console.log(bigger)

const biggerOne = students.find(x => x.id > 21);
console.log(biggerOne)