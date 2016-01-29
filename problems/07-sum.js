'use strict';

module.exports = function sum(numArray) {
  return numArray.reduce(function(nums, arr){
    if(typeof arr === 'number'){
      return nums + arr;
    }
    return nums;
  }, 0);
};
