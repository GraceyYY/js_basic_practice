function create_updated_collection(collection_a, object_b) {
  let compareArray = object_b.value;
  let copyArray = collection_a.map((element) => {
    return element;
  });
  for (let item of compareArray) {
    for (let element of copyArray) {
      if (element.key === item) {
        let count = element.count;
        if (count >= 3) {
          element.count = count - Math.floor(count / 3);
        }
      }
    }
  }
  return copyArray;
}

module.exports = create_updated_collection;