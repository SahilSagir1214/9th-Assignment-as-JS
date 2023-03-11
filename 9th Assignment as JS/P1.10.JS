function findDuplicates(arr) {
    let duplicates = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  
    return duplicates;
  }
  
  const numbers = [3, 6, 2, 8, 1, 5, 2, 8, 3];
  console.log(findDuplicates(numbers)); // Output: [3, 8, 2]