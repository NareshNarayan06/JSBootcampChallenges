/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {

  let factorial = 1 ;                    
  for( i = num ; i > 1 ;i--){
  factorial = factorial * i;   

   }
  return factorial;
 }



function stringReverse(str) {
    let reverse = '';
  for( let i = str.length-1 ; i >= 0 ; i -- ){
    reverse += str[i];
  }
    return reverse;
}

function slicer(str, startIdx, endIdx = str.length - 1) {

  let returnstr='';
  if(arguments.length === 1){
    return str;
  }else if (arguments.length === 2){
    for( let i = startIdx ; i < str.length ; i++){
      returnstr += str[i];
    }
    return returnstr;
  }else if ( arguments.length === 3 ){
    for ( let i = startIdx ; i <= endIdx ; i++){
      returnstr += str[i];
    }
    return returnstr;
  }
    

}

function addTheEvens(num) {
  let total = 0;
  for (let i = 2 ; i <= num ; i += 2){
      total += i ;
  }

    return total;
}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
