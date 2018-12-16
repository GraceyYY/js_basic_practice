'use strict';
var even_asc_odd_desc = function(collection) {
  let even = collection.filter((element) => {
    return element % 2 === 0;
  });
  let odd = collection.filter((element) => {
    return element % 2 === 1;
  });
  return rankAsc(even).concat(rankDesc(odd));

  function rankAsc(collection) {
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
  }

  function rankDesc(collection) {
    for (let i = collection.length; i >= 0; i--) {
      for (let j = 0; j < i; j++) {
        if (collection[j] < collection[j + 1]) {
          let min = collection[j];
          collection[j] = collection[j + 1];
          collection[j + 1] = min;
        }
      }
    }
    return collection;
  }
};
module.exports = even_asc_odd_desc;