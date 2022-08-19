/* 
1. Minimum (19/08/2022)

The 2nd chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.
*/
// input: Two arguments(integers(+ve or -ve ?))

// 1. Using function expressions
let min = function (a, b) {
    if(a < b){
        return a;
    } else {
        return b;
    }
}

// 2. Using function declarations
function min (a, b){
    if(a < b) return a;
    else return b;
}

// 3. Using arrow functions
const min = (a, b) => {
    return (a < b) ? a: b;
} 


// Test values
console.log(min(0,-4))
// -> -4

console.log(min(0, 4))
// -> 0

module.exports = min