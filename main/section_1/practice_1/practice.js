function collect_same_elements(collection_a, collection_b) {
  return collection_a.filter((element) => {
    return collection_b.indexOf(element) >= 0;
  })
}

module.exports = collect_same_elements;