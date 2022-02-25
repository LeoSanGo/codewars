/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false

*/


function solution(str, ending){
  return str.endsWith(ending) ?  true : false;
}

console.log(solution('abcde', 'abc'));

/* 
Other solutions

function solution(str, ending){
  return new RegExp(ending+"$", "i").test(str);
}

----------------------------------------------

function solution(str, ending){
  return str.endsWith(ending);
}

---------------------------------------------

function solution(str, ending){
  if (typeof(str) != "string" || typeof(ending) != "string")
    throw "wrong type";
  if (ending.length>str.length)
    return false;
  return str.substr(str.length-ending.length, ending.length) == ending;
}

-------------------------------------------------

function solution(str, ending){
  return str.substr(-ending.length) == ending;
}

-------------------------------------------------

function solution(str, ending){
  var l = ending.length;
  var str = str.slice(-l);
  return str.match(ending) ? true : false;
}

---------------------------------------------

*/