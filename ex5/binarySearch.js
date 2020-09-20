function binarySearch(array, searchTerm) {
  const middleElementIndex = Math.floor(array.length / 2);
  const elementInMiddle = array[middleElementIndex];
  if (elementInMiddle === undefined) return;

  if (elementInMiddle === searchTerm) {
    return elementInMiddle;
  }

  if (elementInMiddle > searchTerm) {
    return binarySearch(array.slice(0, middleElementIndex), searchTerm);
  } else {
    return binarySearch(
      array.slice(middleElementIndex + 1, array.length),
      searchTerm
    );
  }
}

module.exports = binarySearch;
