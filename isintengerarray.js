/* 
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
  let result
  if (arr === null || arr === undefined) return false
  result = arr.every(el => el % 1 === 0 ? true : false)
  console.log(result);
}

console.log(isIntArray(null));