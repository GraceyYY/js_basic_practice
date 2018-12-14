'use strict';

function collect_min_number(collection) {
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
  return rank_asc(collection)[0];
}

module.exports = collect_min_number;