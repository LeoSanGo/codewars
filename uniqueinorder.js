function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}

uniqueInOrder('AAAABBBCCDAABBB')

/* 
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

-------------------------------------------

var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

-------------------------------------------------

var uniqueInOrder=function(iterable){
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
  }
  return res;
}

--------------------------------------------------

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])


--------------------------------------------------

var uniqueInOrder=function(iterable){
  return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
}

=================================================

var uniqueInOrder=function(iterable){
  iterable = typeof iterable === 'string' ? iterable.split('') : iterable;
  return iterable.filter(function(e, i, arr) {
    return e !== arr[i-1];
  });
}

--------------------------------------------------

const reducer = (acc, x) =>
  acc[acc.length - 1] === x
    ? acc
    : [...acc, x]

const uniqueInOrder = x => [].reduce.call(x, reducer, [])

--------------------------------------------------

const uniqueInOrder = sequence => (Array.from(sequence)).reduce( (prev, cur) => prev[prev.length -1] === cur ? prev : prev.concat(cur), [])


---------------------------------------------


*/