// Sorted Union

/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

function uniteUnique(...arrays) {
  const seen = new Set();
  const result = [];

  for (const arr of arrays) {
    for (const val of arr) {
      if (!seen.has(val)) {
        seen.add(val);
        result.push(val);
      }
    }
  }

  return result;
}