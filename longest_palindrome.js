/* 
Longest Palindrome
Find the length of the longest substring in the given string s that is the same in reverse.

As an example, if the input was “I like racecars that go fast”, the substring (racecar) length would be 7.

If the length of the input string is 0, the return value must be 0.

Example:
"a" -> 1 
"aab" -> 2  
"abcde" -> 1
"zzbaabcd" -> 4
"" -> 0
*/

longestPalindrome=function(s){
  let longest = 0;
  let length = s.length;

  for(let i=0; i < length; i++){
    for(let j = i+1; j <= length; j++) {
      let str = s.slice(i,j);
      let l = str.length
      if(isPalindrome(str) && longest < l) {
        longest = l;
      }
    }
  }
  return longest;
}

function isPalindrome(s) {
  const arr = s.split("");
  return s == arr.reverse().join("");
}