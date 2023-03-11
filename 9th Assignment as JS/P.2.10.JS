const array = [1, 2, 3, 4, 5];
const indexToDelete = 2;

array.splice(indexToDelete, 1);

console.log(`Array after deleting element: ${array}`);
//Array after deleting element: 1,2,4,5