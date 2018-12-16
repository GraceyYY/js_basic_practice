'use strict';

function average_uneven(collection) {
  let odd = collection.filter((element) => {
    return element % 2 === 1;
  });
  let sum = odd.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  });
  return Math.floor(sum / odd.length);
}
module.exports = average_uneven;