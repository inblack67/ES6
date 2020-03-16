// const numbers = [1,2,3,4,5];

// const total = numbers.reduce((sum, number) => {
//   return sum+number;
// }, 0)

// console.log(total);

// const colors = [
//   { color: 'red' },
//   { color: 'green' },
//   { color: 'blue' }
// ]

// const colArray = colors.reduce((c, color) => {
//   c.unshift(color.color);
//   return c
// }, [])

// console.log(colArray);


let str = '((())))';

const isbalanced = (str) => {
  return str.split('').reduce((count, s) => {
    if(s==='(') { count++; }
    else if(s===')') { count--; }

    return count;
  }, 0)
}

// 0 = false so we just !(flipped) it
console.log(!isbalanced(str));