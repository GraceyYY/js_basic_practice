'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let result = [];
  for (let itemInA of collection_a) {
    for (let itemInB of collection_b) {
        if(itemInA % itemInB === 0){
            result.push(itemInA);
        }
    }
  }
  return result;
}

module.exports = choose_divisible_integer;
