const array = [1, 2, 3, 4, 5];
let max = array[0];
let secondMax = array[0];

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    secondMax = max;
    max = array[i];
  } else if (array[i] > secondMax && array[i] != max) {
    secondMax = array[i];
  }
}

console.log(`The second largest element is ${secondMax}`);