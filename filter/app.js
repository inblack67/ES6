let products = [
  {
    name: 'banana',
    type: 'fruit',
    quantity: 30,
    price: 4
  },

  {
    name: 'chicken',
    type: 'meat',
    quantity: 0,
    price: 205
  },

  {
    name: 'apple',
    type: 'fruit',
    quantity: 4,
    price: 7
  }
];

let fruits = products.filter(product => product.type === 'fruit');

let cheapFruits = products.filter(product => product.type === 'fruit' && product.price < 5);

console.log(cheapFruits);

console.log(fruits);