/* 
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function breakCamelCase(str) {
  return str
    .split(/(?=[A-Z])/)
    .join(' ')
    .toString();
}
const str = 'testeCamelCase';
console.log(breakCamelCase(str));

/* 
Other Solutions
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

------------------------------------------
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, "$1 $2");
}

--------------------------------------------
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}

-------------------------------------
const solution = string => string.replace(/[A-Z]/g, ' $&');

--------------------------------------
const solution = string => {
  return [...string].map((char) => {
    return (char === char.toUpperCase()) ? ` ${char}` : char;
  }).join('');
}

--------------------------------
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}


*/
