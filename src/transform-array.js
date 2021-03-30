const CustomError = require("../extensions/custom-error");

module.exports = function transform( arr ) {
  
  let newArr = JSON.parse(JSON.stringify(arr))
 
  if(!Array.isArray(newArr) || newArr.length === 0){
    throw new Error('Error')
  }
  
  for(let i=0; i<newArr.length; i+=1){
   
    for(let j=0; j<newArr[i].length; j+=1){
    
      if(newArr[i][j]=='--discard-prev' && j==0){
        newArr[i].splice(0,1)
      }
      if(newArr[i][j]=='--double-prev' && j==0){
        newArr[i].splice(0,1);
      }
      if(newArr[i][j]=='--double-next' && j===newArr[i].length-1){
        newArr[i].splice((newArr[i].length-1),1)
      }
      if(newArr[i][j]=='--discard-next' && i===newArr[i].length-1){
        newArr[i].splice((newArr[i].length-1),1)
      }
    } 

    if(newArr[i]==='--discard-next'){
      newArr[i]='del';
      newArr[i+1]='del'
    }
    if(newArr[i] ==='--double-prev' && newArr[i-1] ==='del'){
      newArr[i]="del";
    }
    if(newArr[i]==='--double-next'){
      newArr[i] = newArr[i+1]
    }
    if(newArr[i]==='--double-prev'){
      newArr[i]=newArr[i-1]
    }
    if(newArr[i]==='--discard-next'){
      newArr[i] = 'del';
      newArr[i+1] ='del'
    }
    if(newArr[i]==='--discard-prev'&& newArr[i-1]==='del'){
      newArr[i] = 'del'
    }
    if(newArr[i]==='--discard-prev'){
      newArr[i] = 'del';
      newArr[i-1] = 'del'
    }
  
  }
 return newArr.filter(el=> el!=='del');
};
