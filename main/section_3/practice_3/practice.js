function create_updated_collection(collection_a, object_b) {
  let count = {};
  for (let item of collection_a) {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item] += 1;
    }
  }
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