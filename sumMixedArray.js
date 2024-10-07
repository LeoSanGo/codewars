/* Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.

 */

function sumMix(x){
  
    return x.reduce((acc, number) => +number + acc, 0)
  
  }

  const result = sumMix([9, 3, '7', '3'])
  console.log(result);


  /* 
  function sumMix(x){
  return eval( x.join("+") )
}

  */