/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  // Code here
  const even = [];
  const odd = [];
  const divideByThree = [];

  for (const number of numbers) {
    if (number % 3 === 0) {
      divideByThree.push(number);
    } else if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }

  return [even, odd, divideByThree];
}

console.log(numberGrouping([1, 2, 4, 6, 8])); // Output: [[2, 4, 8], [1], [6]]
