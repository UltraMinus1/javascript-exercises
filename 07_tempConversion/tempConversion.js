const convertToFahrenheit = function(temp) {
  return roundToDec((temp * 9)/5 + 32)
};

const convertToCelsius = function(temp) {
  return roundToDec(((temp - 32) * 5)/9)
};

function roundToDec(num) {
  return Math.round(num * 10) / 10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
