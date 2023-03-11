const numbers = [1, 2, 3, 4, 5, 4, 6, 7, 8, 4];
const elementToDelete = 4;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === elementToDelete) {
    numbers.splice(i, 1);
    i--;
  }
}

console.log(numbers);