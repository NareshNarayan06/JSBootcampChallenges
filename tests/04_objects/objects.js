/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
delete obj[prop];
return obj;
}

function numObjectProps(obj) {
  let count = Object.keys(obj);
  return count.length

}

function shoppingCart(cart) {
  let total = 0 ;
  for (let i = 0 ; i < cart.length ; i++){
    total += cart[i].amount;
  }
  return total ;

}

function compareObjects(obj1, obj2) {
 return JSON.stringify(obj1) === JSON.stringify(obj2);
}
module.exports = {
  compareObjects, deleteProp, numObjectProps, shoppingCart,
};
