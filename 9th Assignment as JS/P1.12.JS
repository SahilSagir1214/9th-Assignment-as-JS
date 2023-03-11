function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === x) {
        return mid;
      } else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  
    return -1;
  }
  
  const numbers = [1, 3, 5, 7, 9];
  const searchValue = 5;
  
  const result = binarySearch(numbers, searchValue);
  
  if (result === -1) {
    console.log(`Value ${searchValue} not found in array.`);
  } else {
    console.log(`Value ${searchValue} found at index ${result}.`);
  }