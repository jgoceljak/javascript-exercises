const removeFromArray = function(array, ...remove) {
if (array.length == 0) {
    return "ERROR"
}

for (const item of remove){
    let index = array.indexOf(item)
    if (index != -1){
        array.splice(index, 1)
    }
}
return array
};

// Do not edit below this line
module.exports = removeFromArray;
