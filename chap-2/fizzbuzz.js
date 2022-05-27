// 1st Solution
for (let i = 1; i < 100; i++) {
    if (i % 3 == 0) {
        console.log(`${i}: Fizz`)
    }
    if (i % 5 == 0) {
        console.log(`${i}: Buzz`)
    }
    if (i % 15 == 0) {
        console.log(`${i}: FizzBuzz`)
    }
}

/*
3: Fizz ​​​​​​
5: Buzz ​​​​​
6: Fizz ​​​​​​
9: Fizz ​​​​​​
10: Buzz ​​​​​
12: Fizz ​​​​​​
15: Fizz ​​​​​​
15: Buzz ​​​​​
15: FizzBuzz ​​​​​
18: Fizz ​​​​​​
20: Buzz ​​​​​
21: Fizz ​​​​​​
24: Fizz ​​​​​​
25: Buzz ​​​​​
27: Fizz ​​​​​​
30: Fizz ​​​​​​
30: Buzz ​​​​​
30: FizzBuzz ​​​​​
33: Fizz ​​​​​​
etc...
*/

// 2nd Solution
for (let x = 1; x <= 100; x++) {
    let result = "";
    if (x % 3 == 0)
        result = "Fizz";
    if (x % 5 == 0)
        result = "Buzz";
    if (x % 15 == 0)
        result = "FizzBuzz"
    console.log(result || x)
}

/* Output
1  ​
2  ​
Fizz  ​
4  ​
Buzz  ​
Fizz  ​
7  ​
8  ​
Fizz  ​
Buzz  ​
11  ​
Fizz  ​
13  ​
14  ​
FizzBuzz  ​
etc...
*/


// Book's Solution
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0)
        output += "Fizz";
    if (n % 5 == 0)
        output += "Buzz";

    console.log(output || n);
}


