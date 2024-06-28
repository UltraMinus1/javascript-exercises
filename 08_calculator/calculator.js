const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((total, item) => {
    return total + item;
  }, 0);
};

const multiply = function(arr) {
  if (arr.length == 0) {
    return 0;
  } else {
    return arr.reduce((total, item) => {
      return total * item;
    }, 1);
  }
};

const power = function(a, b) {
	return a ** b
};

const factorial = function(a) {
  let factorial = 1;
	for (let i = 1; i <= a; i++) {
    factorial = factorial * i;
  }
  return factorial;
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
