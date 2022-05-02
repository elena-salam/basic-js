const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let result = [];
    for(let i = 0; i<matrix.length; i +=1){
      const res = matrix[i].filter(item => item==='^^');
      result.push(...res);
     }
    return result.length
}

module.exports = {
  countCats
};
