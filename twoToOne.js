/* 
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

function longest(s1, s2) {
  const s3 = s1 + s2
  const s4 = s3.split('').sort()
  const s5 = s4.filter((item, index) => s4.indexOf(item) === index)
  return s5.join('')
}

/* 
Other solutions

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

-------------------------
function longest(s1, s2) {
  return Array.from(new Set(s1 + s2)).sort().join('');
}

-------------------------
function longest(s1, s2) {
let str = new Set([...s1, ...s2]);
return [...str].sort().join('');
}

-------------------------
function longest(s1, s2) {  
  return [...(new Set(s1 + s2))].sort().join('');
}

-------------------------
const longest = ($1, $2) => [...new Set([...$1, ...$2])].sort().join('')


-------------------------
function longest(s1, s2) {
  return (s1+s2).split('').sort().join('').replace(/(.)\1+/g, '$1');
}

-------------------------
const longest = (s1, s2) => Array.from(s1 + s2)
  .sort()
  .filter((x, i, a) => x !== a[i-1])
  .join('');
*/