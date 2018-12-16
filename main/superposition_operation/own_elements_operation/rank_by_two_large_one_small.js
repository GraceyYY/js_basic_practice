'use strict';

function rank_by_two_large_one_small(collection) {
  let afterRank = rankAsc(collection);
  let result = [];
  for (let i = 0; i <= Math.floor(afterRank.length / 3); i++) {
    let begin = i * 3;
    let end = begin + 3;
    if (end < afterRank.length) {
      let slice = afterRank.slice(begin, end);
      result.push(slice[1]);
      result.push(slice[2]);
      result.push(slice[0]);
    } else {
      let slice = afterRank.slice(begin);
      slice.map((element) => {
        result.push(element);
      });
    }
  }
  return result;

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
}
module.exports = rank_by_two_large_one_small;