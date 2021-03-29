const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if(!sampleActivity || typeof sampleActivity !== "string" || Number(sampleActivity)>15 
    || Number(sampleActivity)<=0 || Number.isNaN(Number(sampleActivity))) {
      return (false);
    
  }
  if(typeof sampleActivity === "string"){
    sampleActivity = Number(sampleActivity);
    return Math.ceil(Math.log(MODERN_ACTIVITY/sampleActivity)/(0.693/HALF_LIFE_PERIOD));
    
  }
  
};
