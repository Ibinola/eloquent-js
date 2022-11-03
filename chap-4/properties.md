Almost all javascript values have properties. Exceptions are **null** and **undefined**

```javascript
null.length;
// -> TypeError: null has no properties.
```

Two main ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a **property** on a value - but not necessarily the same property.

Using a dot, the word after the dot is the literal name of the property

Using sqaure brackets, the expression between the brackets is _evaluated_ to get the property name.

Where value.x fetches the property of value name "x". value[x] tries to evaluated the expression "x" and uses the result, converted to a string, as the property name.

Property names are strings.

The **elements in an array are stored as the array's properties**, using **numbers** as property names. Because you can't use the dot notation with numbers and usually want to use a binding that holds the index anyway, we have to use the bracket notation to get at them.

The *length* propery of an array tells us how many elements it has. this property name is a valid binding name, and we know it's name in advance, so to find the length of an array, you typically write **array.length** because it's easier to write than array["length"].