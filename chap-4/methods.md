Both strings and array object have a number of properties that hold function values.

```javascript
let doh = "Doh";
doh.toUpperCase(); // DOH

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
// -> [1,2,3,4,5]
sequence.pop();
// -> [1,2,3,4]
```

Properties that contains functions are called **methods** of the value they belong to, as in _toUpperCase_ is a method of a string.
