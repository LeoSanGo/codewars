/* 
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"
*/

function repeatStr (n, s) {
  return s.repeat(n);
}

/* 
Other solutions

function repeatStr (n, s) {
  String.prototype.repeat = function(n) {
     return (new Array(n + 1)).join(this);
  };
  return s.repeat(n);
}

function repeatStr (n, s) {
  return n > 1 ? s + repeatStr(--n, s) : s;
}

function repeatStr (n, s) {
  return n == 1 ? s : s + repeatStr(n-1, s);
}
*/