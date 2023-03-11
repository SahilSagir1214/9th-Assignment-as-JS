const array = [7, 2, 4, 8, 1, 9, 3, 6, 5];
const even = [];
const odd = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    even.push(array[i]);
  } else {
    odd.push(array[i]);
  }
}

const ascendingOrderEven = [...even].sort((a, b) => a - b);
const ascendingOrderOdd = [...odd].sort((a, b) => a - b);

console.log(`Original array: ${array}`);
console.log(`Even elements: ${even}`);
console.log(`Odd elements: ${odd}`);
console.log(`Even elements in ascending order: ${ascendingOrderEven}`);
console.log(`Odd elements in ascending order: ${ascendingOrderOdd}`);
//Original array: 7,2,4,8,1,9,3,6,5
//Even elements: 2,4,8,6
//Odd elements: 7,1,9,3,5
//Even elements in ascending order: 2,4,6,8
//Odd elements in ascending order: 1,3,5,7,9