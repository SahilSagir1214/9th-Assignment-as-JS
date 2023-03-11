const array = [1, 2, 3, 4, 5];
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 == 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(`Total even elements: ${evenCount}`);
console.log(`Total odd elements: ${oddCount}`);