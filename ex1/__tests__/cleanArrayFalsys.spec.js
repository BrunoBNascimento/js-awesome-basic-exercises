const cleanArrayFalsys = require("../cleanArrayFalsys");

describe("cleanArrayFalsys", () => {
  it("expects to clean array of undefined and nulls", () => {
    const array = [undefined, null];

    expect(cleanArrayFalsys(array)).toEqual([]);
  });
});
