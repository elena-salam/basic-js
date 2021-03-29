const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
if(!Array.isArray(members)){
  return false;
}
return members.filter(el => typeof el=== "string")
  .map(el=>el.replace(/\s*/g, '').toUpperCase()[0]).sort()
  .join('');


  
  // .trim() - delete whitespaces as well
  
};
