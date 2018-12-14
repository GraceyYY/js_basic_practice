'use strict';

function collect_max_number(collection) {
  function rank_desc(array) {
    for (let i = array.length; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (array[j] < array[j + 1]) {
          let min = array[j];
          array[j] = array[j + 1];
          array[j + 1] = min;
        }
      }
    }
    return array;
  }
  return rank_desc(collection)[0];
}

module.exports = collect_max_number;