/* 
The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!
*/


function sumDigPow(a, b) {
  let range = [];
  let filteredNumbers = [];
  
  for (a; a <= b; a++) {
    range.push(a);
  }

  range.map((element) => {
    let convertNumber = [...(element + '')].map(Number);
    let poweredNumber = 0;
    let t = convertNumber.forEach((el, index) => {
      poweredNumber = Math.pow(el, index + 1) + poweredNumber;
    });
    if (poweredNumber === element) {
      filteredNumbers.push(element);
    }
  });
  return filteredNumbers;
}

console.log(sumDigPow(1, 100));


/* 

Other Solutions

function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}

-------------------------------------------------

function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

-------------------------------------------------------

function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}

------------------------------------------------------------

const EUREKAS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 89,135, 175, 518, 598, 1306, 1676, 2427, 2646798];

const sumDigPow = (a, b) => EUREKAS.filter( (n) => a <= n && n <= b );

---------------------------------------------------------------

function isEureka(n) {
  const nArr = n.toString().split('').map(x => parseInt(x));
  const compN = nArr.reduce((prev, curr, i) => {
    curr = i === 0 ? Math.pow(curr, i+2) : Math.pow(curr, i+1);
    return prev + curr;
  });
  return n === compN;
}

function sumDigPow(a, b) {
  const arr = [];
  
  for (let i = a; i <= b; i++) {
    if (isEureka(i)) {
      arr.push(i);
    }
  }
  
  return arr;
}

----------------------------------------------------------------

function sumDigPow(a, b) { 
  l=[]; for (i=a;i<=b;i++) {s=i+""; c=0; for (j=0;j<s.length;j++) c+=Math.pow(s.charCodeAt(j)-48,j+1); if (c==i) l.push(i)}
  return l;
}

----------------------------------------------------------

function sumDigPow(a, b) {
  return [...Array(b-a+1)].map((_,i)=>i+a)
                          .filter(x=>(x+"").split("").map((y,i)=>Math.pow(+y,i+1)).reduce((m,n)=>m+n)==x);
}

------------------------------------------------------------------

const sumDigPow = (a, b) =>
  [...Array(b - a + 1)].map((_, idx) => a + idx).filter(val => [...`${val}`].reduce((pre, val, idx) => pre + val ** ++idx, 0) === val);

----------------------------------------------------------------

function sumDigPow(a, b) {
  const output = [];

  for (let i = a; i <= b; i++) {
    let check = i
    .toString()
    .split('')
    .reduce((init, val, idx) => {
      init += val ** (idx + 1);
      return init;
    }, 0);
    if (check == i) {
      output.push(Number(i));
    }
  }
  return output;
}
*/