'use strict';

function get_letter_interval(number_a, number_b) {
  const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  if (number_a === number_b) {
    return [alphabet[number_a - 1]];
  } else if (number_a < number_b) {
    return alphabet.slice(number_a - 1, number_b);
  } else {
    return alphabet.slice(number_b - 1, number_a).reverse();
  }
}

module.exports = get_letter_interval;
