const convertToCelsius = function(fahrenheitTemperature) {
  const celsius = (fahrenheitTemperature - 32) * 5 / 9;
  return roundToOneDecimal(celsius);
};

const convertToFahrenheit = function(celsiusTemperature) {
  const fahrenheit = celsiusTemperature * 9 / 5 + 32;
  return roundToOneDecimal(fahrenheit);
};

const roundToOneDecimal = function(number) {
  return Math.round(number * 10)/10
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
