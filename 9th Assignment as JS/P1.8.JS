function findLargestNumber(arr) {
    let largest = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
  
    return largest;
  }
  
  const numbers = [3, 6, 2, 8, 1, 5];
  console.log(findLargestNumber(numbers)); // Output: 8