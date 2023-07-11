const sumAll = function(low, high) {
if (!Number.isInteger(low) || !Number.isInteger(high)){
    return "ERROR"
}
if (low < 0 || high < 0) {
    return "ERROR"
}
if (low > high){
    let temp = high;
    high = low;
    low = temp;
}
    let sum = 0;
for (i = low; i < high+1; i++) {
    sum += i;
}

return sum
};

// Do not edit below this line
module.exports = sumAll;
