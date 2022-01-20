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
  var l = 0;
  for (var i = 0; i<s.length; i++)
    for(var j = i; j<=s.length; j++)
      if(s.substring(i,j) === s.substring(i,j).split('').reverse().join('') && s.substring(i,j).length > l)
        l = s.substring(i,j).length;

  return l;
}