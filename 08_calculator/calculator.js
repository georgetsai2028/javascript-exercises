const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((total, currentItem) => total + currentItem, 0)
};

const multiply = function(array) {
  return array.reduce((total, currentItem) => total * currentItem, 1)
};

const power = function(number, power) {
	let result = 1;
  for (let i = power; i > 0; i--)
  {
    result = result * number;
  }
  return result;
};

const factorial = function(factor) {
  let total = 1;
  for (let i = factor; i > 0; i--){
    total = total * i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
