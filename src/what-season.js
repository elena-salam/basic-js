const CustomError = require("../extensions/custom-error");

module.exports = function getSeason( date ) {
  let month = date.getMonth();
  if(!date){
    return'Unable to determine the time of year!'
  }
  if(Object.prototype.toString.call(date) === "[object Date]"){
    throw new Error();
  }
  if(month === 0 || month === 1|| month=== 11){
    return "winter";
  }
  if(month ===2 || month === 3|| month=== 4){
    return "spring";
  }
  if(month ===5 || month === 6|| month=== 7){
    return "summer";
  }
  if(month ===2 || month === 3|| month=== 4){
    return "autumn";
  } else {
    throw new Error('Error');
  }
};
