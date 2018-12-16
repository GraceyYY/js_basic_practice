'use strict';
var is_exist_element = function(collection, element) {
  let evenIndex = collection.filter((element, index) => {
    return index % 2 === 0;
  });
  return evenIndex.indexOf(element) >= 0;
};
module.exports = is_exist_element;