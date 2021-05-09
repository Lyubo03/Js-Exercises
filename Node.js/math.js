//Modules

const add = (x, y) => x + y;
const PI = 3.14159;
const square = x => x * x;
module.exports.divide = (x, y) => x / y;

const math = {
    add: add,
    square: square,
    PI: PI
}
module.exports = math;

// module.exports.PI = PI;
// module.exports.square = square;
// module.exports.add = add;