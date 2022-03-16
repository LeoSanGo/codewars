Math.round = function(number) {
  const num = number - (Math.floor(number))
  return num > 0.4 ? Math.floor(number) + 1 : number - num; // TODO: fix this
}
Math.ceil = function(number) {
  const num = (number - Math.floor(number))
  return num 
}; 

Math.floor = function(number) {
  return Number.parseInt(number); // TODO: fix this
};

console.log(Math.floor(5.1))