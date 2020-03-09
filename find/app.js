let users = [
  { name: 'John' },
  { name: 'Doe' },
  { name: 'M' }
]

let Moriarty = users.find(user => user.name.startsWith('M'))

console.log(Moriarty) 