const stackupBooks = require("./stackupBooks");
const unStackBook = require("./unStackBook");

(function main() {
  const myBooksStack = [];
  stackupBooks(myBooksStack, "Clean code");
  stackupBooks(myBooksStack, "The pragmatic programmer");
  stackupBooks(myBooksStack, "The mythical man month");
  stackupBooks(myBooksStack, "Clean architecture");
  console.log(myBooksStack);
  unStackBook(myBooksStack);
  console.log(myBooksStack);
})();
