const array = [1, 2, 3, 4, 5];
const searchElement = 3;

let found = false;

for (let i = 0; i < array.length; i++) {
  if (array[i] === searchElement) {
    found = true;
    break;
  }
}

if (found) {
  console.log(`${searchElement} found in the array`);
} else {
  console.log(`${searchElement} not found in the array`);
}
//3 found in the array