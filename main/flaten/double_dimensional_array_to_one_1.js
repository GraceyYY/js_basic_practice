'use strict';

function double_to_one(collection) {
  let result = [];

  for(let item of collection) {
    result = result.concat(item);
  }
  return result;
}

module.exports = double_to_one;