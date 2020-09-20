const binarySearch = require("../binarySearch");

describe("binary search", () => {
  it("Must find number using binary search", () => {
    const arrayToSearch = Array(1000)
      .fill(10)
      .map((a, idx) => a * idx);

    const found = binarySearch(arrayToSearch, 500);

    expect(found).toEqual(500);
  });

  it("Binary search must return undefined", () => {
    const arrayToSearch = Array(1000)
      .fill(10)
      .map((a, idx) => a * idx);

    const found = binarySearch(arrayToSearch, 123);

    expect(found).toEqual(500);
  });
});
