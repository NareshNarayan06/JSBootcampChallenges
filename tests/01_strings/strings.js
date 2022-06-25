/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if ( str.includes(letter)){
   return true;
  }else{
    return false;
  }
}

function isPalindrome(str) {
  let reverse = '';

 for ( let i = str.length-1; i >= 0; i-- ) {

     reverse += str.charAt(i);
 }
 console.log(reverse)
  return str === reverse;

}

function cap(str, letter) {
  let strInCap = str.toUpperCase();
  let letterInCap = letter.toUpperCase();
  let indexOfletterInStr = strInCap.indexOf(letterInCap);
  if(strInCap.includes(letterInCap)){
  return (strInCap.charAt(indexOfletterInStr + 1));
  }else{
    return 'sorry not found';
}
}
function firstCharacter(str1, str2) {
  if(str1.toLowerCase().charAt(0) === str2.toLowerCase().charAt(0)){
    return true;
  }else{
    return false;
    }

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
