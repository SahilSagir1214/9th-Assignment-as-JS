const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = [];
const oddArray = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    evenArray.push(array[i]);
  } else {
    oddArray.push(array[i]);
  }
}

console.log(`Original array: ${array}`);
console.log(`Even array: ${evenArray}`);
console.log(`Odd array: ${oddArray}`);
//Original array: 1,2,3,4,5,6,7,8,9
//Even array: 2,4,6,8
//Odd array: 1,3,5,7,9