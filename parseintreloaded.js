/* 
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.

Examples:

"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:

The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

const words = {
  "zero":0, "one":1, "two":2, "three":3, "four":4, "five":5, "six":6, "seven":7, "eight":8, "nine":9, 
  "ten":10, "eleven":11, "twelve":12, "thirteen":13, "fourteen":14, "fifteen":15, "sixteen":16, 
  "seventeen":17, "eighteen":18, "nineteen":19, "twenty":20, "thirty":30, "forty":40, "fifty":50, 
  "sixty":60, "seventy":70, "eighty":80, "ninety":90
};
const mult = { "hundred":100, "thousand":1000, "million": 1000000 };
function parseInt(str) {
  return str.split(/ |-/).reduce(function(value, word) {
    if (words[word]) value += words[word];
    if (mult[word]) value += mult[word] * (value % mult[word]) - (value % mult[word]);
    return value;
  },0);
}


console.log(parseInt("seven hundred eighty-three thousand nine hundred and nineteen")); // 1


/* 
function parseInt(string) {
  var english = {
    zero:  0,    ten:       10,
    one:   1,    eleven:    11,
    two:   2,    twelve:    12,    twenty:  20,
    three: 3,    thirteen:  13,    thirty:  30,
    four:  4,    fourteen:  14,    forty:   40,
    five:  5,    fifteen:   15,    fifty:   50,
    six:   6,    sixteen:   16,    sixty:   60,
    seven: 7,    seventeen: 17,    seventy: 70,
    eight: 8,    eighteen:  18,    eighty:  80,
    nine:  9,    nineteen:  19,    ninety:  90,
    hundred:  100,
    thousand: 1000,
    million:  1000000
  };
  
  var parts = string.split(/[- ]/).filter(function(word) {
    return word != 'and';
  }).map(function(word) {
    return english[word];
  });
  
  var total = 0;
  var prev = 0;
  
  for (var i = 0, n = parts.length - 1; i <= n; i++) {
    var curr = parts[i];
    if (prev == 0) {
      prev = curr;
    } else if (prev > curr) {
      prev += curr;
    } else {
      prev *= curr;
    }
    
    if (curr >= 1000 || i == n) {
      total += prev;
      prev = 0;
    }
  }
  
  return total;
}

---------------------------------------------------------------------------------------------------------------------
function parseInt(string) {
// numbers and vriations used in suffixes teen and ty
  var wordNumbers = {
    'zero': 0,
    'one': 1,
    'two': 2,
    'twen': 2,
    'three': 3,
    'thir': 3,
    'four': 4,
    'for': 4,
    'five': 5,
    'fif': 5,
    'six': 6,
    'seven': 7,
    'eight': 8,
    'eigh': 8,
    'nine': 9,
    'ten': 10,
    'eleven': 11,
    'twelve': 12,
  };
  
  var number = 0; // number that will be built
  var total = 0; // partials at 10^3, ^6, ...
  
  var words = string.match(/\w+/g);

  for (var w = 0, l = words.length; w < l; w++)
  {
    var word = words[w];
    if (word == 'and') continue;
    if (word == 'thousand') { total += number * 1000; number = 0; continue;}
    if (word == 'million') { total += number * 1000000; number = 0; continue;}
    if (word == 'hundred') { number = number * 100; continue;}

    var ty = word.match(/(\w+)ty$/)
    if (ty) { number += wordNumbers[ty[1]] * 10; continue; }

    var teen = word.match(/(\w+)teen$/)
    if (teen) { number += wordNumbers[teen[1]] + 10; continue; }
    
    if (typeof wordNumbers[word] != 'undefined') { number += wordNumbers[word]; continue; }
    
    console.error('unrecognized word: ', word)
  }
  return total + number;
}

---------------------------------------------------------

function parseInt(string) {
    var arr = string.split(/[\s-]/);
    var result = 0;
    var helper = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
        ten: 10,
        eleven: 11,
        twelve: 12,
        thirteen: 13,
        fourteen: 14,
        fifteen: 15,
        sixteen: 16,
        seventeen: 17,
        eighteen: 18,
        nineteen: 19,
        twenty: 20,
        thirty: 30,
        forty: 40,
        fifty: 50,
        sixty: 60,
        seventy: 70,
        eighty: 80,
        ninety: 90,
        million: function (num) {
            result += num * 1000000;
            return 0;
        },
        thousand: function (num) {
            result += num * 1000;
            return 0;
        },
        hundred: function (num) {
            return num * 100;
        },
        and: 0
    };
    var lastNum = arr.reduce(function (previousValue, currentValue) {
        if (typeof helper[currentValue] === 'number') {
            return previousValue += helper[currentValue];
        } else {
            return helper[currentValue](previousValue);
        }
    }, 0);
    return result + lastNum;
}

----------------------------------------------------

function parseInt(string) {
  var vals = {
    "zero"   :0,  "one"     :1,  "two"      :2,  "three"   :3,  "four"    :4,
    "five"   :5,  "six"     :6,  "seven"    :7,  "eight"   :8,  "nine"    :9,    
    "ten"    :10, "eleven"  :11, "twelve"   :12, "thirteen":13, "fourteen":14,
    "fifteen":15, "sixteen" :16, "seventeen":17, "eighteen":18, "nineteen":19,   
    "twenty" :20, "thirty"  :30, "forty"    :40, "fifty"   :50,
    "fifty"  :50, "sixty"   :60, "seventy"  :70, "eighty"  :80, "ninety"  :90,
    "hundred":100,"thousand":1e3,"million"  :1e6
  }
  var ww = string.replace(/ and /gi, ",").replace(/(\s+|\-)/g,"," ).split(",");
  var e3 = 0;
  var int = ww.reduce( function(i,v){
    var val = vals[v];
    return (val<100 && i+val) || (val==100 && i*100) || (e3=e3+i*val)*0;
  }, 0 )
  return int+e3;
}
*/

