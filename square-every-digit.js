/* 
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
*/

function squareDigits(num){
  let arr = num.toString().split('');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(Math.pow(arr[i], 2));
  }
  return parseInt(newArr.join(''));
}

console.log(squareDigits(9119));

/* 
Other solutions

function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}

function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}

function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}

function squareDigits(num){
  return +String(num).split('').map(function(num){return +num * +num;}).join('');
}
*/