const ab = require('./build/Release/calculate');

console.time("c++")
console.log(ab.calc());
console.timeEnd("c++")

function calc() {
    let i, x = 100.32462344, y = 200.333456533452;
    for (i = 0; i < 100000000; i++) {
        x += y;
    }
    const total = x;
    return total;
}

console.time("js")
console.log(calc());
console.timeEnd("js")