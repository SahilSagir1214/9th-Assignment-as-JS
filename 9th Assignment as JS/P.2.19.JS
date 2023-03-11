const array = [7, 2, 4, 8, 1, 9, 3, 6, 5];
const ascendingOrder = [...array].sort((a, b) => a - b);
const descendingOrder = [...array].sort((a, b) => b - a);

console.log(`Original array: ${array}`);
console.log(`Ascending order: ${ascendingOrder}`);
console.log(`Descending order: ${descendingOrder}`);
//Original array: 7,2,4,8,1,9,3,6,5
//Ascending order: 1,2,3,4,5,6,7,8,9
//Descending order: 9,8,7,6,5,4,3,2,1