const binarySearch = require("./binarySearch");

(function main() {
  const arrayToSearch = Array(1000)
    .fill(10)
    .map((a, idx) => a * idx);
  const foundElement = binarySearch(arrayToSearch, 110);

  console.log(foundElement);
})();
