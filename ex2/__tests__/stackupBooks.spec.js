const stackupBooks = require("../stackupBooks");

describe("stackupBooks", () => {
  it("stack up the books", () => {
    const booksStack = [];
    stackupBooks(booksStack, "Clean code - BOB martin");

    expect(booksStack).toEqual(["Clean code - BOB martin"]);
  });
});
