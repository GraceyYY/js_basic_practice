'use strict';

function even_to_letter(collection) {
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
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (i % 2 === 1) {
      result.push(getLetter(collection[i]));
    }
  }
  return result;
}
module.exports = even_to_letter;