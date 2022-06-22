/* 
Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]

*/

function digitize(n) {
  return n.toString().split('').map(Number).reverse();
  //code here
}

console.log(digitize(348597));

/* 
Other Solutions

function digitize(n) {
  return n.toString().split("").reverse().map(function(i){
    return parseInt(i);
  });
}
----------------

function digitize(n) {
  return n === 0 ? [] : [ n % 10, ...digitize(Math.trunc(n / 10)) ]
}
*/