function collect_same_elements(collection_a, collection_b) {
  let flatArray = [];
  for (let item of collection_b) {
    flatArray = flatArray.concat(item);
  }
  return collection_a.filter((element) => {
    return flatArray.indexOf(element) >= 0;
  })
}

module.exports = collect_same_elements;