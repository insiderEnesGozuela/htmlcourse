// Sum All Numbers in a Range

/*
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
  const [min, max] = [Math.min(...arr), Math.max(...arr)];
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumAll([1, 4]));    // 1 + 2 + 3 + 4 = 10
console.log(sumAll([4, 1]));    // 1 + 2 + 3 + 4 = 10
console.log(sumAll([5, 10]));   // 5 + 6 + 7 + 8 + 9 + 10 = 45