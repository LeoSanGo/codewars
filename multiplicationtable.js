/* 


*/

multiplicationTable = function(size) {
  var result = [];

  for (var i = 0; i < size; i++) {
    result[i] = [];
    for(var j = 0; j < size; j++) {
      result[i][j] = (i + 1) * (j + 1);
    }
  }
  
  return result
}

/* 
multiplicationTable = function(size) {

  return Array.apply(null, new Array(size)).map(function(val, i) {
    return Array.apply(null, new Array(size)).map(function(val, j) {
      return (i+1) * (j+1);
    });
  });
}

--------------------------------------------------

const multiplicationTable = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}

-----------------------------------------------

multiplicationTable = function(n) {
  return Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>(i+1)*(j+1)))
}

-----------------------------------------------------------

const multiplicationTable=s=>Array(s).fill().map((a,i)=>Array(s).fill().map((e,j)=>(1+i)*(1+j)))

------------------------------------------------------------

const multiplicationTable = size =>
  [...Array(size)].map((_, idx) => [...Array(size)].map((_, i) => ++i * (idx + 1)));

-------------------------------------------------------


*/