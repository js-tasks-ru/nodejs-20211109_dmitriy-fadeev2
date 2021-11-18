'use strict'
function sum(a, b) {
  if(typeof(a)=='number' && typeof(b)=='number'){
    return a+b;
  }
  else{
    throw new TypeError()
  }
}
const ad = sum(1,2)
console.log(ad)
module.exports = sum;
