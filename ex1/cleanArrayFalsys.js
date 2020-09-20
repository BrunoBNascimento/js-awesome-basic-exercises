function cleanArrayFalsys(arr) {
  return arr.filter((item) => item !== undefined && item !== null);
}

module.exports = cleanArrayFalsys;
