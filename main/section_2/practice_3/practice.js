function count_same_elements(collection) {
  let count = {};
  collection.map((element) => {
    let key, sum;
    if (element.length > 1) {
      key = element[0];
      sum = parseInt(element.replace(/[^0-9]/ig, ""));
    } else {
      key = element;
      sum = 1;
    }
    if (!count[key]) {
      count[key] = sum;
    } else {
      count[key] += sum;
    }
  });
  let result = [];
  for (let attr in count) {
    let temp = {
      name: attr,
      summary: count[attr]
    };
    result.push(temp);
  }
  return result;
}

module.exports = count_same_elements;