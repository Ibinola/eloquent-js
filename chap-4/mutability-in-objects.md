Strings, numbers, and Booleans are all _immutable_ - it's impossible to change values of those types.

If you have a string that contains "cat", it is not possible for other code to change a character in your string to make it spell "rat".

Objects work differently, you can change their properties, causing a single object value to have different content at different times.

**With objects, there is a difference between having two references to the same object, and having two different objects that contain the same properties.**

```javascript
let object1 = { value: 10 };
let object2 = object1;
let object3 = { value: 10 };

console.log(object1 == object2);
// -> true

console.log(object1 == object3);
// -> false

object1.value = 15;
console.log(object2.value);
// -> 15
console.log(object3.value);
// -> 10
```

The **object1 and object2** bindings grasp the same object, which is why changing object1 also changes the value of object2.They have the same identity. The binding **object3** points to a different object, which initially contains the same properties as object1 but lives a separate life.
