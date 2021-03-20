/* There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/

const data = [17, 17, 3, 17, 17, 17, 17];

function stray(numbers) {
  //find unique numbers and set their count to 0
  const map = new Map(Array.from(new Set(numbers)).map((v) => [v, 0]));

  //take first three numbers from numbers array
  return Array.from(
    numbers.slice(0, 3).reduce((a, c) => {
      //update the count
      return map.set(c, map.get(c) + 1);
    }, map)
    //find the number with a count of 0 or 1
  ).find(([, v]) => v <= 1)[0];
}

const res = stray(data);

console.log(res);


/* Other solutions

function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
-------------------------------

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

------------------------------

function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}

*/

