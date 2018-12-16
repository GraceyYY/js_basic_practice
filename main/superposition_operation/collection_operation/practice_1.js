'use strict';

function hybrid_operation(collection) {
  return collection.reduce((accumulator, currentValue) => {
    accumulator += (currentValue * 3 + 2);
    return accumulator;
  }, 0);
}
module.exports = hybrid_operation;