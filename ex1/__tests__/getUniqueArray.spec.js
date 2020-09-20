const getUniqueArray = require("../getUniqueArray");

describe("getUniqueArray", () => {
  it("expects to receive a unique array", () => {
    const array = ["carlos", "carlos"];

    expect(getUniqueArray(array)).toEqual(["carlos"]);
  });
});
