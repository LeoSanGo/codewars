/* 
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true / True if every element in an array is an integer or a float with no decimals.
returns true / True if array is empty.
returns false / False for every other input.
*/

function isIntArray(arr) {
  if (Array.isArray(arr)) {
        return arr.every(el => Number.isInteger(el))
  }
  return false
}

console.log(isIntArray(['-1']));

/* 
Other solutions

function isIntArray(arr) {
  return Array.isArray(arr) && arr.every(function (x) { return Math.floor(x) === x });
}

---------------------------------------------------

let isIntArray = arr => !!arr && arr.every(Number.isInteger);

-------------------------------------------------

Number.isInteger = Number.isInteger || function(value) {
    return typeof value === "number" && 
           isFinite(value) && 
           Math.floor(value) === value;
};

function isIntArray(arr)
{
    return Array.isArray(arr) && arr.every(Number.isInteger)
}

--------------------------------------------------------

function isIntArray(arr) {
  if(!Array.isArray(arr))return false;
  for(i=0;i<arr.length;i++){
    if(!Number.isInteger(arr[i]))return false;
  }
  return true;
}

-------------------------------------------------------

function isIntArray(arr) {
  return arr?arr.every(function(n){return ~~n === n;}):false;
}

--------------------------------------------------

function isIntArray(arr) {
  return !arr ? false : arr.every(Number.isInteger);
}

-----------------------------------------------------

const isIntArray = arr => !!arr && arr.every(x => ~~x === x)

----------------------------------------------------

function isIntArray(arr) {
  return Array.isArray(arr) && arr.map(x => x === +x && Number.isInteger(x) ? true : false).filter(e => e === true).length === arr.length
}

-------------------------------------------------

const isIntArray = a => a ? a.every( n => Number.isInteger(n) ) : false 

------------------------------------------------
*/