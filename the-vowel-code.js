/* 
  Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with 
  numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

*/

function encode(string) {
  return string.replace(/[aeiou]/g, replaceVowel);
}

function decode(string) {
  return string.replace(/[0-5]/g, replaceNumber);
}

function replaceVowel(str) {
  switch (str) {
    case 'a':
      return '1';
    case 'e':
      return '2';
    case 'i':
      return '3';
    case 'o':
      return '4';
    case 'u':
      return '5';

    default:
      break;
  }
}

function replaceNumber(str) {
  switch (str) {
    case '1':
      return 'a';
    case '2':
      return 'e';
    case '3':
      return 'i';
    case '4':
      return 'o';
    case '5':
      return 'u';

    default:
      break;
  }
}

const str = 'h2ll4';
console.log(decode(str));

/* 
Other Solutions


*/
