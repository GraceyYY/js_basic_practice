'use strict';

function median_to_letter(collection) {
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
  function getMedian(collection) {
    let index = Math.floor(collection.length / 2);;
    if (collection.length % 2 === 1) {
        return collection(index);
    }else{
        return Math.ceil((collection[index] + collection[index - 1]) / 2);
    }
  }

  return getLetter(getMedian(collection));
}

module.exports = median_to_letter;
