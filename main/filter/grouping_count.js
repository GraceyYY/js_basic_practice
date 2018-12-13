'use strict';

function grouping_count(collection) {
  let result = {};
  for (let item of collection) {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
  }
  return result;
}

module.exports = grouping_count;