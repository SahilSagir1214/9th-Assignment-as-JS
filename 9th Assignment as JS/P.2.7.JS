const array = [1, -2, 3, -4, 5];
let negativeCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    negativeCount++;
  }
}

console.log(`Total negative elements: ${negativeCount}`);