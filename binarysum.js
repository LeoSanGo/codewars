/* Implement a function that adds two numbers together and returns their sum in binary. 
The conversion can be done before, or after the addition.

The binary number returned should be a string. */

function binarySumNum (num1, num2) {
    
    const sum = num1 + num2;
    return sum.toString(2);

}

console.log(binarySumNum(1432,645));

/* Other solutions

function addBinary(a,b){
  return Number(a + b).toString(2);
}

---------------------------

function addBinary(a,b){
  return (a+b).toString(2)
}
 */