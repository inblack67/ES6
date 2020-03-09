const fruits = ['Apples', 'Oranges','Pineapples','Banana'];

// foreach
fruits.forEach(f => console.log(f));

// map
const upperCases = fruits.map(f => f.slice(0,-1).toUpperCase());
console.log(upperCases);

// filter
const people = [
  { id: 1,name: 'John Doe1',age: 30 },
  { id: 2,name: 'John Doe2',age: 31 },
  { id: 3,name: 'John Doe3',age: 32 }
];
const newPeople = people.filter(p => p.id!== 1)

console.log(newPeople);


// spread ...
const arr = [1,2,3];
const arr2 = [...arr, 4];
console.log(arr);
console.log(arr2);


const person = {
  name: 'John',age: 10
}

const newPerson = {
  ...person,
  email: 'john@gmail.com'
}

console.log(newPerson);


// filter + spread
const arr3 = [...arr.filter(ar => ar !== 1)];
console.log(arr3);


// destructuring
const profile = {
  id: 1,
  person: {
    name: 'Aman',
    age: 22
  },
  photo: 'no-photo.jpeg'
}

const { person: { name }, id, photo } = profile;

console.log(name);
console.log(id);
console.log(photo);