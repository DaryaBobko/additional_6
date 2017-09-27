var bigInt = require("big-integer");

module.exports = function zeros(expression) {

  var splittedExpr = expression.split('*');
  var multipliedFac = bigInt(1);
 for (var i = 0; i < splittedExpr.length; i++) {
   if ( /!!/.test(splittedExpr[i])) {
    var onlyDigit = parseInt(splittedExpr[i].replace ( /!/g,''));
    if ( onlyDigit % 2 === 0 ){
      var fac = factorial(onlyDigit, 2, 2);
      multipliedFac = fac.multiply(multipliedFac);
    }
    else {
      var fac = factorial(onlyDigit, 1, 2);
      multipliedFac = fac.multiply(multipliedFac);
    }
   } 
   else{
    var onlyDigit = parseInt(splittedExpr[i].replace ( /!/g,''));    
    var fac = factorial(onlyDigit, 1, 1);
    multipliedFac = fac.multiply(multipliedFac);
   }
 }
 var facStr = multipliedFac.toString();
 var zerosCount = 0;
 var i = facStr.length-1; 
 while (facStr[i] === '0') {
  zerosCount++;
  i--;
 }
 return zerosCount;
}

function factorial(number, start, inc){
  var result = bigInt(1);
  for (var i = start; i <= number; i += inc){
    result = result.multiply(i);
  }
  return result;
}