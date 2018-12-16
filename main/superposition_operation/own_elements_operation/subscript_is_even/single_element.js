'use strict';
var single_element = function(collection) {
  let even = collection.filter((element, index) => {
    return index % 2 === 1;
  });
  let result = [];
  for (let item of even) {
    if (even.indexOf(item) === even.lastIndexOf(item)) {
      result.push(item);
    }
  }
  return result;
};
module.exports = single_element;