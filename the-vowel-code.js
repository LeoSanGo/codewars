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

// turn vowels into numbers
function encode(string){
  return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
}

//turn numbers back into vowels
function decode(string){
  return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });

  ------------------------------------------------
  function encode(string){
  var vowelMapping = {'a': 1, 'e': 2, 'i': 3, 'o': 4, 'u': 5};
  return codeStringGivenMapping(string, vowelMapping);
}

function decode(string){
  var vowelMapping = {'1': 'a', '2': 'e', '3': 'i', '4': 'o', '5': 'u'};
  return codeStringGivenMapping(string, vowelMapping); 
}

function codeStringGivenMapping(string, mapping){
  return string.split('').map(function(char){
    return mapping[char] || char;
  }).join(''); 
}

-------------------------------------------------
const table = ['a', 'e', 'i', 'o', 'u']
const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')

----------------------------------------------------
const obj = {a: 1, e: 2, i: 3, o: 4, u: 5};

const encode = string =>
  string.replace(/[aeiou]/g, val => obj[val]);

const decode = string =>
  string.replace(/[1-5]/g, val => Object.keys(obj)[--val]);

-----------------------------------------------------------
var encode = coder.bind(/[aeiou]/g, 'search');
var decode = coder.bind(/[1-5]/g, 'charAt');

function coder(func, string) {
  return string.replace(this, func[func].bind(' aeiou'));
}

----------------------------------------------------
const encode = s => s.replace(/[aeiou]/g, v => ' aeiou'.indexOf(v));
const decode = s => s.replace(/\d/g, v => ' aeiou'[v]);

-----------------------------------------------------

*/
