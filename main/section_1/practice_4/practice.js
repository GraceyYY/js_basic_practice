function collect_same_elements(collection_a, object_b) {
  let resultArray = collection_a.filter((element) => {
    return object_b.value.indexOf(element.key) >= 0;
  })

  let result = [];
  for (let item of resultArray) {
    result.push(item.key);
  }
  return result;
}

module.exports = collect_same_elements;