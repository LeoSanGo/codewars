/* 

Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/


function getCount(str) {
  var vowelsCount = 0;
  vowelsCount = str.match(/[aeiou]/gi);
  return vowelsCount ? vowelsCount.length : 0;
}
console.log(getCount('abracadabra'));


/* 
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

------------------------------------------

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

------------------------------------------

function getCount(str) {
 return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}

------------------------------------------

function getCount(str) {
  var vowelsCount = 0;
  str.split("").forEach(function(x){
    if(x == "a" | x == "e" | x == "i" | x == "o" | x == "u"){
      vowelsCount += 1;
    }
  });  
  return vowelsCount;
}

----------------------------------------------------



*/