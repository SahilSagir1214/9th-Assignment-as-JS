function linearSearch(arr, x) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
        return i;
      }
    }
    return -1;
  }
  
  const numbers = [4, 2, 7, 1, 9, 5];
  const searchValue = 7;
  
  const result = linearSearch(numbers, searchValue);
  
  if (result === -1) {
    console.log(`Value ${searchValue} not found in array.`);
  } else {
    console.log(`Value ${searchValue} found at index ${result}.`);
  }