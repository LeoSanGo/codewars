/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
*/

function isIsogram(str){
  return str.toLowerCase().split('').filter((v,i,a) => a.indexOf(v) === i).length === str.length;
  //...
}

/* 
function isIsogram(str){
  return new Set(str.toUpperCase()).size == str.length;
}

---------------------

function isIsogram(str){ 
  return !/(\w).*\1/i.test(str)
}

---------------

function isIsogram(str){
  var i, j;
  str = str.toLowerCase();
  for(i = 0; i < str.length; ++i)
    for(j = i + 1; j < str.length; ++j)
      if(str[i] === str[j])
        return false;
  return true;
}

-------------------------

function isIsogram(str){
  return !str.match(/([a-z]).*\1/i);
}

----------------------------

function isIsogram (str) {
  return !str || (str.length === new Set(str.toLowerCase()).size);
}
*/