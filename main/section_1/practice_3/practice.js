function collect_same_elements(collection_a, object_b) {
  return collection_a.filter((element) => {
    return object_b.value.indexOf(element) >= 0;
  })
}

module.exports = collect_same_elements;