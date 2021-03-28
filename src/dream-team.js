const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
 
if(!Array.isArray(members)){
  return false;
}
return members.filter(el => typeof el=== "string")
  .map(el=>el.replace(/\s*/g, '').toUpperCase()[0]).sort()
  .join('');

// return newArr.sort().join('')
  // return members.filter(el => typeof el=== "string")
  // .map(el=>el.replace(/\s*/g, '').toUpperCase()).sort()
  // .join('');
  
  // for(let i = 0; i<members.length; i+=1){
  //   if(typeof members[i] === "string"){
  //     return members[i].replace(/\s*/g, '');
  //   }else{
  //     return false
  //   }
  
};
