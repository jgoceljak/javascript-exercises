const repeatString = function(string, x) {
    if (x < 0){
        return "ERROR"
    }

    let result = '';
    for (let i = 0; i < x; i++) {
        result += string;
      }

      return result;
};

// Do not edit below this line
module.exports = repeatString;
