var counter = (arr) => {
        return "This Array has " + arr.length + " items";
    }
    //es6 feature
let addition = (a, b) => `The sum is ${a + b}`;

const constant = 93.955845;

//module.exports.counter = counter;
//module.exports.addition = addition;
//module.exports.constant = constant;

module.exports = {
    // es6
    counter,
    addition,
    constant: constant
}