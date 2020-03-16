let computers = [
  { name: 'Apple', ram: '24' },
  { name: 'Microsoft', ram: '16' },
  { name: 'Dell', ram: '24' },
  { name: 'Lenovo', ram: '8' },
  { name: 'Crap', ram: '2' }
];

// every - &&
const everyResult = computers.every((c) => {
  return c.ram > 16;
})

const someResult = computers.some((c) => {
  return c.ram > 16;
})

console.log(everyResult);
console.log(someResult);

const names = [
  'Alex',
  'Marilyn',
  'Turner'
]

console.log(names.every(n => n.length > 4));
console.log(names.some(n => n.length > 4));