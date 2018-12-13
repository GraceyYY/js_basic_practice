'use strict';

var rank_desc = function(collection) {
  for (let i = collection.length; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      if (collection[j] > collection[j + 1]) {
        let min = collection[j];
        collection[j] = collection[j + 1];
        collection[j + 1] = min;
      }
    }
  }
  return collection;
};

module.exports = rank_desc;