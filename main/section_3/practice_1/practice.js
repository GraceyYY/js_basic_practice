function create_updated_collection(collection_a, object_b) {
  let compareArray = object_b.value;
  let copyArray = collection_a.map((element) => {
    return element;
  });
  for (let item of compareArray) {
    for (let element of copyArray) {
      if (element.key === item) {
        element.count -= 1;
      }
    }
  }
  return copyArray;
}

module.exports = create_updated_collection;