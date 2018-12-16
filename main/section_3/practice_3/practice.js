function create_updated_collection(collection_a, object_b) {
  let count = {};
  for (let item of collection_a) {
    if (!count[item]) {
      count[item] = 1;
    } else {
      count[item] += 1;
    }
  }
  let collection_c = [];
  for (let attr in count) {
    let temp = {
      key: attr,
      count: count[attr]
    };
    collection_c.push(temp);
  }
  let compareArray = object_b.value;
  let newCollectionC = collection_c.map((element) => {
    return element;
  });
  for (let item of compareArray) {
    for (let element of newCollectionC) {
      if (element.key === item) {
        let count = element.count;
        if (count >= 3) {
          element.count = count - Math.floor(count / 3);
        }
      }
    }
  }
  return newCollectionC;
}
module.exports = create_updated_collection;