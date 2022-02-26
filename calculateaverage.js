function find_average(array) {
  if (array.length === 0) {
    return 0
  } else {
    const sum = array.reduce((acc, elem) => acc + elem, 0);
  return sum / array.length;
  }
  
}

/* 
Other solutions

var find_average = (array) => {  
  return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
}

-----------------------------

const sum = array => (array) ? array.reduce((a,b)=>a+b) : 0;

const find_average = array => (array) ? sum(array)/array.length : 0 ;

---------------------------

function find_average(arr) {
    return arr.length > 0? arr.reduce((a, b) => a + b) / arr.length : 0;
}

-----------------------------------------------

const find_average = array => array.reduce((acc, curr) => acc + curr, 0) / array.length || 0;

------------------------------------------------

function find_average(array) {
    return array.length && array.reduce( (res, item) => res += item, 0 ) / array.length;
}

-----------------------------------------------

function find_average(array) {
  return array.length>0 ?
    array.reduce((a,b)=>a+b)/array.length : 0
}

-----------------------------------------
*/