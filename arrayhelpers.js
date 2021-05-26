/* 
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().

Explanation:

square() must return a copy of the array, containing all values squared
cube() must return a copy of the array, containing all values cubed
average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
sum() must return the sum of all array values
even() must return an array of all even numbers
odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!

Example
var numbers = [1, 2, 3, 4, 5];

numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/

Array.prototype.square = function () {
  return this.map((curr) => curr ** 2);
};

Array.prototype.cube = function () {
  return this.map((curr) => curr ** 3);
};

Array.prototype.average = function () {
  if (this.length === 0) return NaN;
  else return this.sum() / this.length;
};

Array.prototype.sum = function () {
  return this.reduce((acc, curr) => acc + curr);
};

Array.prototype.even = function () {
  return this.filter((curr) => curr % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((curr) => curr % 2 === 1);
};

const numbers = [];
console.log(numbers.average());

/* 
Other Solutions

Array.prototype.square = function() {
  var squared = [];
  for (var i = 0; i < this.length; i++) {
    squared[i] = Math.pow(this[i], 2);
  }
  return squared;
}

Array.prototype.cube = function() {
  var cubed = [];
  for (var i = 0; i < this.length; i++) {
    cubed[i] = Math.pow(this[i], 3);
  }
  return cubed;
}

Array.prototype.sum = function() {
  var sum = 0;
  for (var i = 0; i < this.length; i++) {
    sum += this[i];
  }
  return sum;
}

Array.prototype.average = function() {
  if (this.length == 0) return NaN;
  return this.sum() / this.length;
}

Array.prototype.even = function() {
  var evens = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 0) evens.push(this[i]);
  }
  return evens;
}

Array.prototype.odd = function() {
  var odds = [];
  for (var i = 0; i < this.length; i++) {
    if (this[i] % 2 == 1) odds.push(this[i]);
  }
  return odds;
}

-------------------------------------------

Object.assign(Array.prototype, {
  square() { return this.map(x => x * x) },
  cube() { return this.map(x => x * x * x) },
  sum() { return this.reduce((a, b) => a + b, 0) },
  average() { return this.sum() / this.length },
  even() { return this.filter(x => !(x % 2)) },
  odd() { return this.filter(x => (x % 2)) }
})

--------------------------------------------

Array.prototype.square = function() { return this.map(n => n * n)}

Array.prototype.cube = function() { return this.map(n => n * n * n)}

Array.prototype.sum = function() { return this.reduce((a, b) => a + b, 0)}

Array.prototype.average = function() { return this.sum() / this.length}

Array.prototype.even = function() { return this.filter(n => !(n & 1))}

Array.prototype.odd = function() { return this.filter(n => (n & 1))}
*/
