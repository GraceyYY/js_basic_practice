'use strict';

var number_map_to_word_over_26 = function(collection) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  function getLetter(n) {
    if (n <= 26) {
      return alphabet[n - 1];
    } else {
      let firstLetter = alphabet[Math.floor((n - 1) / 26) - 1];
      let secondLetter = alphabet[(n - 1) % 26];
      return firstLetter + secondLetter;
    }
  }
  return collection.map((element) => {
    return getLetter(element);
  })
};

module.exports = number_map_to_word_over_26;