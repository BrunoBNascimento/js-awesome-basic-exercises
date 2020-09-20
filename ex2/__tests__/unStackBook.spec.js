const unStackBook = require("../unStackBook");

describe("unStack", () => {
  it("unstack the books", () => {
    const booksStack = ["Clean code - BOB martin", "second book"];
    unStackBook(booksStack);

    expect(booksStack).toEqual(["Clean code - BOB martin"]);
  });
});
