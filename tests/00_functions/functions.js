/* eslint-disable consistent-return */
function max(num1,num2,num3) {

  if((num1>=num2) && (num3<=num1)){
    return num1;
  }else if ((num2>=num1) && (num3<=num2)){
    return num2;
  }else{
    return num3;
  }
}


function addUnknown(num1=0,num2=0,num3=0,num4=0,num5=0) {
  if (arguments.length <= 5){
    return num1+num2+num3+num4+num5
    }else {
      console.log('Users are allowed to give up to 5 numbers as input')
    }

}

function evenOrOdd(num) {
  if(num%2 != 0){
    return console.log('odd');
  }else{
    return console.log('even')
  }

}

function operator(num1,num2,num3) {
  if (num1,num2,num3 === 0 ){
    console.log('You have entered "0" value for num1, num2, num3')
 }else if ((num1 + num2) === num3 ){
  console.log('plus')
  }else if ((num1 - num2) === num3){
  console.log('minus')
  }else if ((num1 * num2) === num3){
  console.log('multiply')
  }else if ((num1 / num2) === num3){
  console.log('divide')
  }else {
    console.log('null')
  }

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
