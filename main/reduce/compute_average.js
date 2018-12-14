'use strict';

function compute_average(collection) {
  let sum = 0;
  for (let item of collection) {
    sum += item;
  }
  return sum / collection.length;
}

module.exports = compute_average;