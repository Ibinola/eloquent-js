Values of the type _object_ are arbitrary collection of **properties**

The binary **in** operator, when applied to a string and an object, tells us whether that object has a property with that name.

To find out what properties an object has, you can use the `Object.keys()` function. You give it an object, and it returns an array of strings- the object's property names.

```javascript
console.log(Object.keys({ x: 0, y: 1, z: 2 }));
// -> ["x", "y", "z"]
```

`Object.assign()` - copies all properties from one object into another.

```javascript
let objectA = { a: 1, b: 2 };
Object.assign(objectA, { b: 3, c: 4 });
console.log(objectA);
// -> {a: 1, b: 3, c: 4}
```
