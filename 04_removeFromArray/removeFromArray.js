const removeFromArray = function(arr, ...elements) {
    let removed =[];
    for (let i=0; i<arr.length; i++) {
        if (!elements.includes(arr[i])) {
            removed.push(arr[i]);
        }
    }
    return removed;
};


// Do not edit below this line
module.exports = removeFromArray;
