'use strict';
var calculate_average = function(collection) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < collection.length; i++) {
    if (i % 2 === 1) {
      sum += collection[i];
      count += 1;
    }
  }
  return Math.round(sum / count);
};
module.exports = calculate_average;