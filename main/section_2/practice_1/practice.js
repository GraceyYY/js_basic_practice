function count_same_elements(collection) {
  let count = {};
  for (let item of collection) {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item] += 1;
    }
  }

  let result = [];
  for (let attr in count) {
    let temp = {
      key: attr,
      count: count[attr]
    };
    result.push(temp);
  }
  return result;
}

module.exports = count_same_elements;