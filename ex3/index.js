const marketQueue = require("./marketQueue");

(function main() {
  const marketQ = new marketQueue();

  marketQ
    .addBuyer("Fulana")
    .addBuyer("Cicrana")
    .addBuyer("Beltrana")
    .addBuyer("Dona maria");
  console.log(marketQ);
})();
