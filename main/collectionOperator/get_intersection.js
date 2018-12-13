'use strict';

function get_intersection(collection_a, collection_b) {
  let result = [];
  for (let item of collection_b) {
    if (collection_a.indexOf(item) >= 0) {
      result.push(item);
    }
  }
  return result;
}

module.exports = get_intersection;