multiplicationTable = function(size) {
  const newSize = size * size;
  let array = []
  for (let index = 1; index <= newSize; index++) {
    array.push(index)
  }
  
  const arr = array.slice(size)
  console.log(arr);
}

multiplicationTable(3)