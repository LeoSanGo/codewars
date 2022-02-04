/* 
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

function even_or_odd(number) {
  return number % 2 ? 'Odd' : 'Even'; //falsy thrully
}

/* 
Other solutions

function even_or_odd(number) {
   return number % 2 === 0 ? 'Even' : 'Odd';
}

-----------------------------------------------------

const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';

-------------------------------------------------------

const even_or_odd = n => ["Even","Odd"][n&1] ;

---------------------------------------------

const even_or_odd = n => ['Even', 'Odd'][n & 1];
*/