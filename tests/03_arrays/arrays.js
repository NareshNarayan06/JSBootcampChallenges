/* eslint-disable no-unused-vars */
function multiply(arr) {
  let total = 1 ;
  let newArr = arr.flat();
  for(let i = 0 ; i < newArr.length ; i++){
    total *= newArr[i]
  }
  return total
}

function includesCopy(arr, searchValue) {
  for(let i = 0 ; i < arr.length ; i++){
    if(arr[i] === searchValue)
      return true
  }
  return false
}

function inventory(arr) {

}

function camelCase(str) {
  let str2 = str.replace('!',"");
  let result= "";
  let str2ToArr = str2.split(" ");
  for (let i = 0 ; i < str2ToArr.length ; i++){
  if (i == 0) {
    result += str2ToArr[i].toLowerCase();
  } else {
   result += str2ToArr[i].charAt(0).toUpperCase()+str2ToArr[i].slice(1).toLowerCase(); 
  }
  }
  return result;

}


function joiner(arr,optional = ',') {
  let result = '';
  for (let i = 0 ; i < arr.length ; i++){
    if (result){
      result += optional;
    }
    result += arr[i];
  }
  return result
  
}a

module.exports = {
  multiply, includesCopy, inventory, camelCase, joiner,
};
