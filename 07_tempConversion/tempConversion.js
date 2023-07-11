const convertToCelsius = function(temperature) {

  if (!isNaN(temperature)) {
       let celcius = (temperature - 32) * (5/9);
       celcius = Math.round(celcius * 10) / 10;
       return celcius
  } else {
    return "ERROR"
  }
};

const convertToFahrenheit = function(temperature) {
  if (!isNaN(temperature)) {
    let faren = (temperature * (9/5)) + 32;
    faren = Math.round(faren * 10) / 10;
    return faren
    } else {
      return "ERROR"
    }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
