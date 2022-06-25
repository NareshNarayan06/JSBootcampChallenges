/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if ( str.includes(letter)){
    console.log(`'${str}' does have the letter '${letter}''`)
  }else{
    console.log(`'${str}' does not have the letter '${letter}'`)
  }
}

function isPalindrome(str) {
  let reverse = '';

 for ( let i = str.length-1; i >= 0; i-- ) {

     reverse += str.charAt(i);
 }
  return str === reverse;

}

function cap(str, letter) {
  let strInCap = str.toUpperCase();
  let letterInCap = letter.toUpperCase();
  let indexOfletterInStr = strInCap.indexOf(letterInCap);
  if(strInCap.includes(letterInCap)){
  console.log(strInCap.charAt(indexOfletterInStr + 1))
  }else{
    console.log(`'${str}' does not have the letter '${letter}'`)
  }
}

function firstCharacter(str1, str2) {
  if(string1.toLowerCase().charAt(0) === string2.toLowerCase().charAt(0)){
    return true;
  }else{
    return false;
    }

}

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
