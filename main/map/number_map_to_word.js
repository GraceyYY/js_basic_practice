'use strict';

var number_map_to_word = function(collection) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  return collection.map((element) => {
    return alphabet[element - 1];
  })
};

module.exports = number_map_to_word;