'use strict';

function double_to_one(collection) {
  let result = [];

  function flatArray(array) {
    for (let item of array) {
      if (result.indexOf(item) < 0) {
        result.push(item);
      }
    }
  }

  for (let item of collection) {
    if (Array.isArray(item) === true) {
      flatArray(item);
    } else {
      if (result.indexOf(item) < 0) {
        result.push(item);
      }
    }
  }
  return result;
}

module.exports = double_to_one;