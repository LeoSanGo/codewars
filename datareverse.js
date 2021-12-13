/* A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.

The data is given in an array as such:

[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
Note: In the C and NASM languages you are given the third parameter which is the number of segment blocks. */

function dataReverse(data) {
  const result = [];
    for (let i = 0; i < data.length; i += 8) {
      result.unshift(...data.slice(i, i + 8));
    }
    return result;
}
const data = [1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
console.log(dataReverse(data));

//OTHER SOLUTIONS-----------------------------------------------------------------------

/* 
const dataReverse = (data, out = []) => {
    for (let i = 0; i < data.length; i += 8){
        out.unshift(...data.slice(i, i+8));
    }
    return out;
}

---------------------------------------------------------------

function dataReverse(data) {
  if( data.length%8 === 0 ) {
    
    let i = data.length
    const arr = [];
    
    while(i >= 0) {
            
      arr.push(...data.slice((i-8), i))      
      
      i -= 8;
    }

    return arr;
  }
}

--------------------------------------------------------

function dataReverse(data) {
  const splitBytes = [];
  let currByte = [];
  
  for (let i = 0; i < data.length; i += 1) {
    currByte.push(data[i]);
    
    if (!((i + 1) % 8)) {
      splitBytes.push(currByte);
      currByte = [];
    }
  }
  
  splitBytes.reverse();
  const reversedData = [];
  
  for (let byte of splitBytes) {
    for (let i = 0; i < byte.length; i += 1) {
      reversedData.push(byte[i]);
    }
  }
  
  return reversedData;
}

----------------------------------------------------------------

function dataReverse(data) {
  return (data.join('').match(/.{8}/g)||[]).reverse().join('').split('').map(n=>+n);
}

-------------------------------------------------------------------------

const _ = require('lodash');

function dataReverse(data) {
  return _(data).chunk(8).reverse().flatten();
}

------------------------------------------------------------------

const R = require('ramda');

const dataReverse = R.pipe(R.splitEvery(8), R.reverse, R.unnest);

--------------------------------------------------------------------

const dataReverse = data =>
  [...data.join(``).match(/.{8}|$/g).reverse().join(``)].map(Number);

----------------------------------------------------------------------

const dataReverse = data => {

  const result = [];

  while(data.length){
    result.push(...data.splice(-8))
  }

  return result;
}

--------------------------------------------------------------------

function dataReverse(data) {
  return data.join('').match(/\w{8}/g).reverse().join('').split('').map(e => +e)

}
*/