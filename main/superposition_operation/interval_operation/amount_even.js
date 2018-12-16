'use strict';

function amount_even(collection) {
  let even = collection.filter((element) => {
    return element % 2 === 0;
  });
  return even.reduce((accumulator, currenValue) => {
    return accumulator + currenValue;
  });
}
module.exports = amount_even;