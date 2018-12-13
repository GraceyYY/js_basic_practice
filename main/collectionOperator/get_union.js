'use strict';

function get_union(collection_a, collection_b) {
  let result = [];

  function addToNewArray(array) {
    for (let element of array) {
      if (result.indexOf(element) < 0) {
        result.push(element);
      }
    }
  }

  addToNewArray(collection_a);
  addToNewArray(collection_b);

  return result;
}

module.exports = get_union;