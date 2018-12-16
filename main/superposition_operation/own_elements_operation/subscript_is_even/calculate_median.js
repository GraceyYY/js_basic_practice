'use strict';
var calculate_median = function(collection) {
  function getMedian(collection) {
    let index = Math.floor(collection.length / 2);;
    if (collection.length % 2 === 1) {
      return collection[index];
    } else {
      return Math.ceil((collection[index] + collection[index - 1]) / 2);
    }
  }
  let even = collection.filter((element) => {
    return element % 2 === 0;
  });
  return getMedian(even);
};
module.exports = calculate_median;