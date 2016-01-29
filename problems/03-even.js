'use strict';

module.exports = function even(numArray) {
  return numArray.filter(function(val){
    return val% 2 === 0;
  });
};
