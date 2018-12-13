'use strict';

function get_letter_interval_2(number_a, number_b) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let result = [];
  if (number_a === number_b) {
    return [getLetter(number_a)];
  } else if (number_a < number_b) {
    for (let i = number_a; i <= number_b; i++) {
      result.push(getLetter(i));
    }
  } else {
    for (let i = number_a; i >= number_b; i--) {
      result.push(getLetter(i));
    }
  }
  return result;

  function getLetter(n) {
    if (n <= 26) {
      return alphabet[n - 1];
    } else {
      let firstLetter = alphabet[Math.floor((n - 1) / 26) - 1];
      let secondLetter = alphabet[(n - 1) % 26];
      return firstLetter + secondLetter;
    }
  }
}
module.exports = get_letter_interval_2;