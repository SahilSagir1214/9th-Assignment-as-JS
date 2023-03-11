const array = [1, 2, 1, 3, 4, 2, 5, 1];
const uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}

console.log(`Unique elements in the array: ${uniqueArray}`);
//Unique elements in the array: 1,2,3,4,5