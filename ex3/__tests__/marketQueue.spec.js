const marketQueue = require("../marketQueue");

describe("marketQueue", () => {
  it("must add buyers", () => {
    const marketQ = new marketQueue();
    const { queue } = marketQ.addBuyer("Testable person");

    expect(queue).toEqual(["Testable person"]);
  });
  it("must shift buyers", () => {
    const marketQ = new marketQueue();
    marketQ.addBuyer("Person 0");
    marketQ.addBuyer("Person 1").addBuyer("Person 2").addBuyer("Person 3");
    marketQ.addBuyer("Person four");

    const { queue } = marketQ.finalizeBuyerAttendance();

    expect(queue).toEqual(["Person 1", "Person 2", "Person 3", "Person four"]);
  });
});
