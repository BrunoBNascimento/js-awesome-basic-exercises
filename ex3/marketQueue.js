function createMarket(defaultBuyers) {
  const addBuyer = (buyerName) => {
    this.queue.push(buyerName);

    return this;
  };

  const finalizeBuyerAttendance = () => {
    this.queue.shift();

    return this;
  };

  this.queue = defaultBuyers || [];
  this.addBuyer = addBuyer;
  this.finalizeBuyerAttendance = finalizeBuyerAttendance;
  return this;
}

module.exports = createMarket;
