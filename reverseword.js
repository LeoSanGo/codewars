/* Complete the function that accepts a string parameter, and reverses each word in the string. 
All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps" */


function reverseWords(str) {
    const newString = str.split(' ');
    console.log(newString.length);
    for (let i = 0; i < newString.length; i++) {
        let element = newString[i];
        console.log(element)
        return element;
    }
    //return newString;
  }

  console.log(reverseWords("Testa string"));

  /* 
  function reverseWords(str) {
return str
.split(‘’)
.reverse()
.join(‘’)
.split(‘ ‘)
.reverse()
.join(‘ ‘);
}
reverseWords(‘The quick brown fox jumps over the lazy dog.’);
  */