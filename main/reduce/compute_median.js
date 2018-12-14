'use strict';

function compute_median(collection) {

  let nums = rank_asc(collection);
  let result;

  if (nums.length % 2 === 1) {
    result = nums[Math.floor(nums.length / 2)]
  } else {
    result = (nums[nums.length / 2] + nums[nums.length / 2 - 1]) / 2;
  }
  return result;

  function rank_asc(array) {
    for (let i = array.length; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] > array[j + 1]) {
          let min = array[j];
          array[j] = array[j + 1];
          array[j + 1] = min;
        }
      }
    }
    return array;
  }
}

module.exports = compute_median;