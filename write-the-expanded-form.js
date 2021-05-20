function expandedForm(num) {
  const numToArrayString = num.toString().split('');
  let arrayExpanded = [];
  for (let i = 0; i < numToArrayString.length; i++) {
    if (numToArrayString[i] != 0)
      arrayExpanded.push(
        Number(numToArrayString[i]) * 10 ** (numToArrayString.length - 1 - i)
      );
  }
  return arrayExpanded.toString().replace(/,/gi, ' + ');
}

const num = 0222;
console.log(expandedForm(num));

/* 
Other Solutions

const expandedForm = n => n.toString()
                            .split("")
                            .reverse()
                            .map( (a, i) => a * Math.pow(10, i))
                            .filter(a => a > 0)
                            .reverse()
                            .join(" + ");

----------------------------------------

const expandedForm = n => n.toString()
      .split('')
      .reverse()
      .map((a, i) => a * (10 ** i))
      .filter(a => a > 0)
      .reverse()
      .join(' + ');

---------------------------------------------
function expandedForm(num) {
  return String(num)
          .split("")
          .map((num, index, arr) => num + "0".repeat(arr.length - index -1 ))
          .filter((num) => Number(num) != 0)
          .join(" + ")
}

----------------------------------------------
var expandedForm = (num) => {
  var arr = num.toString().split('').reverse();
  var result = [];
  for(var i = 0; i < arr.length; i++){
    arr[i] == 0 ? result.push() : result.push(arr[i] + ('0'.repeat(i)))
  }
  return result.reverse().join(' + ')
}

-----------------------------------------
function expandedForm(num) {
  if (num < 10) return `${num}`;
  let over = num % (Math.pow(10, (num.toString().length - 1)));
  if (!over) return `${num}`;
  return `${num-over} + ${expandedForm(over)}`;
}

----------------------------------------------
const expandedForm = (num) => {
  let pow = [];
  let decimal = [];
  num = num.toString().split('');
  let len = num.length;
  for (let i = 0; i <= len - 1; i++) {
    pow.unshift(i);
  }
  num.forEach((x, index) => {
    x = parseInt(x);
    decimal.push(x * 10 ** pow[index]);
  });
  let toDecimal = decimal.filter((a) => a !== 0);
  return toDecimal.toString().split(',').join(' + ');
};
console.log(expandedForm(70304));
 */
