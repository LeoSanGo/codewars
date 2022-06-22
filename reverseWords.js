/* 
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
 */

function reverseWords(str) {
  return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');

}
console.log(reverseWords('This is an example!'));

/* 
Other examples
var reverseWords=s=>s.replace(/\S+/g,v=>[...v].reverse().join``)
-----------------

function reverseWords(str) {
  var newStr = "";
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr.split(" ").reverse().join(" ");
}

-----------------------------
function reverseWords(str) {
  return str.replace(/\S+/g, w => w.split('').reverse().join(''));
}
----------------------


*/