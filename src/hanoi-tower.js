const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const turnsValue = Math.pow(2, disksNumber)-1;
  const secondsValue = Math.floor(3600*turnsValue/turnsSpeed);
 
  return {turns:turnsValue, seconds:secondsValue}
};
