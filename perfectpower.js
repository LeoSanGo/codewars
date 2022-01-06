/* 
A perfect power is a classification of positive integers:

In mathematics, a perfect power is a positive integer that can be expressed as an integer power of another positive integer. More formally, n is a perfect power if there exist natural numbers m > 1, and k > 1 such that mk = n.

Your task is to check wheter a given integer is a perfect power. If it is a perfect power, return a pair m and k with mk = n as a proof. Otherwise return Nothing, Nil, null, NULL, None or your language's equivalent.

Note: For a perfect power, there might be several pairs. For example 81 = 3^4 = 9^2, so (3,4) and (9,2) are valid solutions. However, the tests take care of this, so if a number is a perfect power, return any pair that proves it.

Examples
Test.describe("perfect powers", function(){
  Test.it("should work for some examples",function(){
    Test.assertSimilar(isPP(4), [2,2], "4 = 2^2");
    Test.assertSimilar(isPP(9), [3,2], "9 = 3^2");
    Test.assertEquals( isPP(5), null, "5 isn't a perfect number");
  });
});

*/


var isPP = function (n) {
  var result = [];
  for (var m = 2; m <= Math.sqrt(n); m++) {
    var k = 2;
    var p = Math.pow(m, k);

    while (p <= n && p > 0) {
      if (p == n) result.push(m, k);
      k++;
      p = Math.pow(m, k);
    }
  }
  while (result.length > 0) {
    return result;
  }
  return null;
};


/* 
Other solutions

function isPP(n) {
  for (var m = 2; m * m <= n; ++ m)
    for (var k = 2; Math.pow(m, k) <= n; ++ k)
      if (Math.pow(m, k) == n) return [m, k];
  return null;
}

--------------------------------------------------

var isPP = function(n){
  for (var m = 2; m <= Math.floor(Math.sqrt(n)); ++m) {
    var k = Math.round(Math.log(n) / Math.log(m))
    if (Math.pow(m, k) == n) return [m, k];
  }
  return null;
}

----------------------------------------------------

var isPP = function(n){
  var res=null, x=1, p;
  while( x++<n && !res ){
    p = Math.round(Math.pow(n,1/x));
    if( Math.pow(p,x)==n ) res = [p,x]
  }
  return res
}

----------------------------------------------------

var isPP = function(n){
  for(var i = Math.floor(Math.log(n)/Math.log(2)); i > 1; i--) {
    var rt = Math.round(Math.pow(n, 1/i));
    if(Math.pow(rt, i) === n) {
      return [rt, i];
    }
  }
  return null;
}

-------------------------------------------------------

const { round, sqrt } = Math;
const isPP = (n, e = 2) => {
  const b = round(n ** (1 / e));
  return round(b ** e) == n ? [ b, e ]
  : e > sqrt(n) ? null : isPP(n, ++e);
}

-------------------------------------------------------


const isPP = n => {
  for (let m = 2; m <= n ** .5; m++) {
    let k = Math.round(Math.log(n) / Math.log(m));
    if (m ** k === n) return [m, k];
  }
  return null;
};

----------------------------------------------------------

const isPP = n => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) 
    for (let x = 2; i ** x <= n; x++)
      if (i ** x === n)
        return [i, x];
  return null;
}

-----------------------------------------------------------

const isPP = (n) => {
  const max = Math.floor(n / 2)
  
  for(let i = 2; i<=max; i++) {
    for(let power=2; i**power <= n ; power++) {  
      if(i**power == n) {
        return [ i, power ];
      }
    } 
  }
  
  return null;
}

--------------------------------------------------------

var isPP = function(n){
  let _result = [];
  for(let i = 2; i <= Math.ceil(Math.sqrt(n)); i++) {
    let _pow = Math.round(Math.log(n) / Math.log(i));
    if(Math.pow(i, _pow) === n) {
      _result = _result.concat([i, _pow]);
    }
  }
  return _result.length > 0 ? _result : null;
}

----------------------------------------------------------
*/