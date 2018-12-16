'use strict';
var even_group_calculate_average = function(collection) {
  let selected = [];
  for (let i = 0; i < collection.length; i++) {
    if (i % 2 === 1) {
      selected.push(collection[i]);
    }
  }
  let even = selected.filter((element) => {
    return element % 2 === 0;
  });
  let result = [];
  let temp = {
    '1': [],
    '2': [],
    '3': []
  };
  if (even.length === 0) {
    result = [0];
  } else {
    for (let item of even) {
      let key = item.toString().length;
      if (key === 1) {
        temp[1].push(item);
      } else if (key === 2) {
        temp[2].push(item);
      } else if (key === 3) {
        temp[3].push(item);
      }
    }
  }
  for (let attr in temp) {
    if (temp[attr].length > 0) {
      result.push(calculateAverage(temp[attr]));
    }
  }

  function calculateAverage(array) {
    let sum = array.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    });
    return Math.round(sum / array.length);
  }
  return result;
};
module.exports = even_group_calculate_average;