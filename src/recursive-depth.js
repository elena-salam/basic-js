const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr){
  if (Array.isArray(arr)){
    let quantity = 1 + arr.reduce((a, b) => Math.max(a, this.calculateDepth(b)), 0);
    return quantity;
  } else {
    return 0;
  }
}
};