// To get more practice with first-class functions, this lesson has three tests to pass that require you to write the following functions in the index.js file:

// 1 The receivesAFunction function should:
// take a callback function as an argument
// call the callback function
// it doesn't matter what this function returns, so long as it calls the callback function

const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

function receivesAFunction(callback){
callback();
}

// 2 The returnsANamedFunction function should:
// take no arguments
// return a named function

function returnsANamedFunction(){
return function fn(){}
}

// 3 The returnsAnAnonymousFunction function should:
// take no arguments
// return an anonymous function
function returnsAnAnonymousFunction(){
    return ()=> console.log("");
}