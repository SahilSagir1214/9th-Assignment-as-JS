const array = [1, 2, 1, 3, 4, 2, 5, 1];
const uniqueArray = [];

for (let i = 0; i < array.length; i++) {
  if (uniqueArray.indexOf(array[i]) === -1) {
    uniqueArray.push(array[i]);
  }
}

console.log(`Array with duplicate elements removed: ${uniqueArray}`);
//Array with duplicate elements removed: 1,2,3,4,5