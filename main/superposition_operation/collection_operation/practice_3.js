'use strict';

function hybrid_operation_to_uneven(collection) {
  let odd = collection.filter((element) => {
    return element % 2 === 1;
  });
  return odd.reduce((accumulator, currentValue) => {
    return accumulator + (currentValue * 3 + 5);
  }, 0);
}
module.exports = hybrid_operation_to_uneven;