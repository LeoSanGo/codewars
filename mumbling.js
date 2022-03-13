/* 
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
	const arr =  s.split('').map((s, index) => s.repeat(index + 1));
  return arr.map(s => s.charAt(0).toUpperCase() + s.substr(1).toLowerCase()).join('-');
}

console.log(accum("NyffsGeyylB"));

/* 
Other Solutions

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}

------------------------------------------------

function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}- Try understand the repetition

-------------------------------------------------

function accum(str) {
  var letters = str.split('');
  var result = [];
  for (var i = 0; i < letters.length; i++) {
    result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }
  return result.join('-');
}

----------------------------------------------

function accum (s) {
  return [...s].map((element, index) => {
    return element.toUpperCase() + element.toLowerCase().repeat(index);
  }).join('-');
} - used spred operator and concat repetition with index

---------------------------------------------

function accum(s) {
  return s.split('')
  .map((item, index) => item.toUpperCase() + item.toLowerCase().repeat(index))
  .join('-');
}

-----------------------------------------------------

const repeat = (s, n) => Array.from({length: n}, () => s).join("")
const accum = (s) => s.split("").map((c, i) => c.toUpperCase() + repeat(c.toLowerCase(), i)).join("-")

-------------------------------------------------

function accum(s) {
  return s
    .split('')
    .map((s, i) => s.toUpperCase() + s.toLowerCase().repeat(i))
    .join('-')
} - one of best solution

-----------------------------------------------------------

*/
