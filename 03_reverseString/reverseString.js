const reverseString = function(string) {
    if (string === "") {
      return "ERROR";
    }
  
    const result = string.split("");
    const reversed = result.reverse();
    const final = reversed.join("");
  
    return final;
  };

// Do not edit below this line
module.exports = reverseString;
