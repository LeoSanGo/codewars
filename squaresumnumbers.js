/* 
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
  let sum = 0
  for( let i = 0; i < numbers.length; i++) {
      sum += numbers[i] **2
  }
  return sum
}

/* 
OTHER SOLUTIONS

function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

-----------------------------------------------------------

function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

-----------------------------------------------------------

function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}

---------------------------------------------------------

function squareSum(numbers){
  var sum = 0;
  numbers.forEach(function(n) {
    sum += n * n
  });
  return sum;
}

------------------------------------------------------------

function squareSum(numbers)
{ 
  var totalSum = 0;
  for (i=0;i<numbers.length;i++)
  {
    totalSum += Math.pow(numbers[i], 2);
  }
  return totalSum;
}

-----------------------------------------------------------

const squareSum = numbers => numbers.reduce((a, b)=> a + b**2, 0)

---------------------------------------------------------

function squareSum(numbers) {
  return numbers.reduce((s,a)=>s+a*a,0);
}

----------------------------------------------------------

function squareSum(numbers){
  return numbers.reduce((s,v) => s + v * v, 0);
}

------------------------------------------------------

function squareSum(numbers){
  return numbers.reduce((accumulator, currentValue) => accumulator+= currentValue ** 2, 0)
}

----------------------------------------------------------
*/