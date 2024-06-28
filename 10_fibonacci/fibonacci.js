const fibonacci = function(n) {
    if (n < 0) {
        return "OOPS"
    }
    let previous = 1;
    let current = 0;
    let h = 0;
    for (let i = 1; i <= n; i++) {
        h = current;
        current += previous;
        previous = h;
    }
    return current;
};

console.log(fibonacci(2))

// Do not edit below this line
module.exports = fibonacci;
