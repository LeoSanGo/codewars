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

const num = 222;
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
