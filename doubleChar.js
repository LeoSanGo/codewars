/* 
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

Examples (Input -> Output):
* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/

function doubleChar(str) {
  // Your code here
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    newStr += str[i] + str[i];
  }
  return newStr;
}

function dd(str) {
  return str.split("").map((char) => char + char).join("");
}

/* 
Other Solutions
function doubleChar(str) {
  return str.replace(/(.)/g, "$1$1")
}

-------------------------
function doubleChar(str) {
  return [...str].map(v=>v+v).join('');
}

-------------------------
function doubleChar(str) {
  return str.replace(/./g, '$&$&');
}

-------------------------
const doubleChar = str => str.replace(/(.)/g, '$1$1');

*/

console.log(dd("1234!_ "));