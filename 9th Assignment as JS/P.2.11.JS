const array = [1, 2, 1, 3, 4, 2, 5, 1];
const frequencyMap = {};

for (let i = 0; i < array.length; i++) {
  if (frequencyMap[array[i]]) {
    frequencyMap[array[i]]++;
  } else {
    frequencyMap[array[i]] = 1;
  }
}

console.log(`Frequency of each element:`);
for (let key in frequencyMap) {
  console.log(`${key}: ${frequencyMap[key]}`);
}
//Frequency of each element:
//1: 3
//2: 2
//3: 1
//4: 1
//5: 1