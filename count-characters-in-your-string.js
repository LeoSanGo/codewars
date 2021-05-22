function count (string) {  
    let objectReturned = {}
    for (let i = 0; i < string.length; i++) {
        if(objectReturned.hasOwnProperty(string[i])) {
            objectReturned[string[i]] +=1;
        } else {
            objectReturned[string[i]] = 1;
        }
    }
    return objectReturned
  }

const str = 'aba';
console.log(count(str));

/* 
Other Solutions
function count (string) {  
    let cache={};
    string.split('').map(v=>cache[v]=cache[v]+1||1)
    return cache;
}
---------------------------------------------
function count (string) {  
  var count = {};
  string.split('').forEach(function(s) {
     count[s] ? count[s]++ : count[s] = 1;
  });
  return count;
}

-----------------------------------------------
function count (string) {
  return string.split('').reduce(function(counts,char){
    counts[char] = (counts[char]||0) + 1;
    return counts;
  },{});
}

------------------------------------------------
function count (string) {  
  var obj = {};
  string = string.split('').forEach(function(x){
    obj[x] = obj[x] ? obj[x] + 1 : 1;
  });
  return obj;
}

-------------------------------------------------
const count = require('lodash').countBy;

------------------------------------------------
const count = string =>
  [...string].reduce((pre, val) => (pre[val] = -~pre[val], pre), {});
*/