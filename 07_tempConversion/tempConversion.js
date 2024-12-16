const convertToCelsius = function(fahrenheit) {
  let celcius = 0;
  celcius = (fahrenheit - 32) * .5556;
  return parseFloat(celcius.toPrecision(3));

};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = 0;
  fahrenheit = (celcius * 1.8 + 32);
  return parseFloat(fahrenheit.toPrecision(4));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
