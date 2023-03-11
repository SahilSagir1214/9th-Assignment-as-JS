const array = [1, 2, 3, 4, 5];
const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(`Original array: ${array}`);
console.log(`Reversed array: ${reversedArray}`);
//Original array: 1,2,3,4,5
//Reversed array: 5,4,3,2,1