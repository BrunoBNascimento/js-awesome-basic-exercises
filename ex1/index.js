const getUniqueArray = require("./getUniqueArray");
const cleanArrayFalsys = require("./cleanArrayFalsys");
const compose = require("./compose");

(function main() {
  const array = [
    "Carlos",
    "Roberto",
    "Roberto",
    "Max",
    "Carlos",
    undefined,
    null,
  ];

  const sanitizeAndGetByUnique = compose(getUniqueArray, cleanArrayFalsys);

  console.log(sanitizeAndGetByUnique(array));
})();
