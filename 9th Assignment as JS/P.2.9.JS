const array = [1, 2, 3, 4, 5];
const elementToInsert = 6;
const indexToInsert = 2;

array.splice(indexToInsert, 0, elementToInsert);

console.log(`Array after inserting element: ${array}`);
//Array after inserting element: 1,2,6,3,4,5