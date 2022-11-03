<h1>Bindings and Scopes</h1>
 
For bindings/variables defined outside of any function or block, the scope is the whole program-you can refer to such bindings wherever you want. These are called ***global***

But bindings created for function parameters or declared inside a function can be referenced only in that function, so they are known as **_local_** bindings.

<h1>Functions as Values</h1>

A function binding usually simply acts as a name for a specific piece of the program. It's defined once and never changed. It makes it easy to confuse the function and it's name. But the two are different

```javascript
let launchMissiles = function () {
  missileSystem.launch("now");
};
if (safeMode) {
  launchMissiles = function () {
    /* do nothing */
  };
}
```

<h1>Declaration Notation</h1>

A shorter way to create a function binding.

```javascript
function square(x) {
  return x * x;
}
```

This is a function declaration. The statement defines the binding **_square_** and points it at the given function.

```javascript
console.log("The future says:", future());

function future() {
  return "You'll never have flying cars";
}
```

The preceding code works, even though the function is defined below the code that uses it. Function declarations are not part of the regular top-to-bottom flow of control. They are conceptually moved to the top of their scope and can be used by all the code in that scope. This is sometimes useful because it offers the freedom to order code in a way that seems meaningful, without worrying about having to define all functions before they are used.

<h1>Arrow Functions</h1>

Instead of the function keyword, it uses an arrow (=>) made up of an equal sign and a greater-than character.

If the body is a single expression, rather than a block in braces, the expression will be returned from the function. So these two definitions of **square** do the same thing.

```javascript
const square1 = (x) => {
  return x * x;
};

const square2 = (x) => x * x;
```

When an arrow function has no parameters at all, it's parameter list is just an empty set of paranthesis.

```javascript
const horn = () => {
  console.log("Toot");
};
```

<h1>Closure</h1>

What happens to local variables/bindings when the function call that created them is no longer active?

```javascript
function wrapValue(n) {
  let local = n;
  return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1()); // 1
console.log(wrap2()); // 2
```

This is allowed and still works, both instances of the bindings can still be accessed. This situation is a good demonstration of the fact that local bindings are created anew for every call, and different calls can't trample on one another's local bindings.

This feature - being able to reference a specific instance of a local binding in an enclosing scope is called **_closure_**.

A function that references bindings from local scopes around it is called a **closure**
