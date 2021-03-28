const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  let totalCat = 0;
  const cat = '^^';
for(let i = 0; i<backyard.length; i +=1){
  for(let j = 0; j<backyard[i].length; j+=1){
    if(backyard[i][j] == (cat)){
      totalCat+=1;
    } else {
      totalCat +=0;
    }
  
  }
}
return totalCat;
};
