/*
2. We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, it's evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

NB: When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run of stack space and abort.
*/


function isEven(n){
    /*
       isEven function would produce a Recursion error when we input a negative number. Because according to the recursive algorithm, at each recursive step, we lower the value of n by 2;
    */


    // Invalid input: n is not a positive number, whole number.
    if (n < 0){
        return undefined;
    }
    else {

        // Base Case 1: 1 is Even */
        if (n == 1) {
            return true;
        }

        // Base Case 2: 0 is Odd
        if (n == 0) {
            return false;
        }
    }

    // Recursive Step: N's eveness is same as N - 2.
    return isEven(n - 2)
}


/*Test Cases*/
console.log(isEven(-1));
// -> undefined

console.log(isEven(50));
// -> true

console.log(isEven(75));
// -> false