// Sum Numbers
function sum (numbers) {
  if (numbers.length === 0) return 0
    return numbers.reduce((acc, arr) => {
      return acc + arr;
    }, 0)
    
    
};

console.log(sum([1, 5.2, 4, 0, -1]));