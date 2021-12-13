/* Modify the kebabize function so that it converts a camel case string into a kebab case.

kebabize('camelsHaveThreeHumps') // camels-have-three-humps
kebabize('camelsHave3Humps') // camels-have-humps
Notes:

the returned string should only contain lowercase letters
 */

function funcKebabize(str) {
  return str.replace(/[0-9]/g, '').split(/(?=[A-Z])/).join('-').toLowerCase()
}
console.log(funcKebabize("camelsHave3Humps"));

//OTHER SOLUTIONS---------------------------
/* 
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
} 
--------------------------------------------------

function kebabize(str) {

  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();

}

------------------------------------------------

function kebabize(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
}

-------------------------------------------------

function kebabize(str) {

return str.split('').filter(v => isNaN(parseInt(v))).map(v => (v.toUpperCase() === v) ? v.replace(v, '-' + v.toLowerCase()) : v.toLowerCase()).join('').replace(/^-/, '');

}

--------------------------------------------

function kebabize(str) {
  return str.replace(/[0-9]/g, '').replace(/\B[A-Z]/g, (x) => '-' + x).toLowerCase();
}

-------------------------------------------------

function kebabize(str) {
 return str.replace(/(\d)/g,'')
 .replace(/(\B[A-Z])/g,"-$1").toLowerCase();
}

--------------------------------------------------


*/