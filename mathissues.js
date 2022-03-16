/* 
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()
*/



Math.round = function(number) {
  const num = number - (Math.floor(number))
  return num >= 0.5 ? Math.floor(number) + 1 : number - num; // TODO: fix this
}

Math.ceil = function(number) {
  if (number > 1) {
    const numParse = number.toFixed(...arguments) - Number.parseInt(number)
    return numParse.toFixed(...arguments) > 0 ? (Math.floor(number) + 1) : number
  }
  const numParse = number - Number.parseInt(number).toFixed()
  return numParse > 0 ? (Math.floor(number) + 1) : number
}; 

Math.floor = function(number) {
  return Number.parseInt(number); // TODO: fix this
};

console.log(Math.ceil(0.4))

/* 
Other Solutions

Math.round = function(number) {
  return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number) ;
};

Math.ceil = function(number) {
  return (parseInt(number) === number) ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};

--------------------------------------------------------

Math.floor = number => parseInt(number)
Math.round = number => Math.floor(number + 0.5)
Math.ceil  = number => Number.isInteger(number) ? number : Math.floor( number + 1 )

------------------------------------------------------

Math.floor = function floor(x){
   return x - x % 1; 
}
//function calls are expensive, so...
Math.round = function round(x){
   return (x + 0.5) - (x + 0.5) % 1;
}
Math.ceil = function ceil(x){
   return x - x % 1 + !!(x % 1);
}

--------------------------------------------

Math.round = function(number) {
  return Math.floor(number + 0.5);
};

Math.ceil = function(number) {
  return (number | 0) + (number % 1 !== 0 ? 1 : 0);
};

Math.floor = function(number) {
  return number | 0;
};

-------------------------------------------

Math.round = function(n)
{ return parseInt(n+0.5); };

Math.ceil = function(n)
{ return n==parseInt(n) ? this.round(n) : parseInt(n)+1; };

Math.floor = function(n)
{ return parseInt(n); };

-------------------------------------------

Math.round = (n) => n + 0.5 >> 0;
Math.ceil = (n) => Number.isInteger(n) ? n : n + 1 << 0;
Math.floor = (n) => n >> 0;

------------------------------------------

Math.round = function(number) {
  return ~~(number + .5);
};

Math.ceil = function(number) {
  return number == ~~(number) ? number : ~~(number + 1);
};

Math.floor = function(number) {
  return ~~number;
};

------------------------------------------

const MATH_FUNCTIONS = ['round', 'ceil', 'floor'];
for(var key in MATH_FUNCTIONS)
  eval(`Math.${MATH_FUNCTIONS[key]} = require('vm').runInNewContext('Math.${MATH_FUNCTIONS[key]}')`);

  ------------------------------------------------------------

*/