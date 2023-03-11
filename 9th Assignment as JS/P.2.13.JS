const array = [1, 2, 1, 3, 4, 2, 5, 1];
const frequencyMap = {};
let duplicates = 0;

for (let i = 0; i < array.length; i++) {
  if (frequencyMap[array[i]]) {
    frequencyMap[array[i]]++;
  } else {
    frequencyMap[array[i]] = 1;
  }
}

for (let key in frequencyMap) {
  if (frequencyMap[key] > 1) {
    duplicates += frequencyMap[key] - 1;
  }
}

console.log(`Total number of duplicate elements: ${duplicates}`);
//Total number of duplicate elements: 3