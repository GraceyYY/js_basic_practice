'use strict';

function compare_collections(collection_a, collection_b) {
  if (collection_a.length > 0 && collection_b.length > 0) {
    if (collection_a.length != collection_b.length) {
      return false;
    } else {
      for (let i = 0; i < collection_a.length; i++) {
        if (collection_a[i] != collection_b[i]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
}

module.exports = compare_collections;