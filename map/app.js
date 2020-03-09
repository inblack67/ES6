let numbers = [1,2,3];

let doubledNumbers = numbers.map(n => n*2);

console.log(doubledNumbers);

let cars = [

  { 
    name: 'car1',
    price: 'cheap' 
  },

  { 
    name: 'car2',
    price: 'expensive' 
  },
]

let price = cars.map(car => car.price)
console.log(price);