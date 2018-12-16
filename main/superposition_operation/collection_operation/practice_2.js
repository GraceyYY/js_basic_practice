'use strict';

function hybrid_operation_to_uneven(collection) {
  let odd = collection.filter((element) => {
    return element % 2 === 1;
  });
  return odd.map((element) => {
    return element * 3 + 2;
  })
}
module.exports = hybrid_operation_to_uneven;