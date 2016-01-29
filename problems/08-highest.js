'use strict';

module.exports = function highest(numArray) {
  return numArray.reduce(function(nums, arr){
    if(typeof arr === 'number'){
      if (nums === null){
        nums = arr;
        return arr;
      } else if(arr > nums) {
      return nums + arr;
    }
  }
    return nums;
  }, null);
};
