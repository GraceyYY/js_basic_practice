function create_updated_collection(collection_a, object_b) {
  let count = {};
  collection_a.map((element) => {
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
  let collectionC = [];
  for (let attr in count) {
    let temp = {
      key: attr,
      count: count[attr]
    };
    collectionC.push(temp);
  }
  let compareArray = object_b.value;
  for (let item of compareArray) {
    for (let element of collectionC) {
      if (element.key === item) {
        let count = element.count;
        if (count >= 3) {
          element.count = count - Math.floor(count / 3);
        }
      }
    }
  }
  return collectionC;
}
module.exports = create_updated_collection;