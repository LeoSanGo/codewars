function getMiddle(s) {
  const length = s.length;
  if (s.length % 2 === 0) {
    return s.slice(length / 2 - 1, length / 2 + 1);
  } else {
    return s.charAt(length / 2);
  }
}

const s = 'A';
console.log(getMiddle(s));

/* 
Other Solutions

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

--------------------------------------------
function getMiddle(s) {
  var middle = s.length / 2;
  return (s.length % 2) 
    ? s.charAt(Math.floor(middle))
    : s.slice(middle - 1, middle + 1);
}

---------------------------------
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}

-----------------------------------
const getMiddle = s => s.substr(s.length - 1 >>> 1, (~s.length & 1) + 1);

---------------------------------
function getMiddle(s)
{
  return s.length % 2 ? s.charAt(Math.floor(s.length/2)) : s.substr(s.length/2-1, 2);
}

---------------------------------
function getMiddle(s)
{
  return s.slice((s.length-1)/2, s.length/2+1);
}
*/
