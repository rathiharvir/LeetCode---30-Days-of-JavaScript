# 2667. Create Hello World Function
Write a function ``createHelloWorld``. It should return a new function that always returns "Hello World".
 

**Example 1:**

```
Input: args = []
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f(); // "Hello World"

The function returned by createHelloWorld should always return "Hello World".
```


**Example 2:**
```
Input: args = [{},null,42]
Output: "Hello World"
Explanation:
const f = createHelloWorld();
f({}, null, 42); // "Hello World"

Any arguments could be passed to the function but it should still always return "Hello World".
```

## Explanation
In this example, counter returns a function that increments and logs a variable count each time it's called. count is defined within counter, so it's not accessible outside of it. However, when counter returns the inner function, a closure is created that retains access to count. This means that each time increment is called, it can still access and modify count.

## Solution
To create a function that returns another function that always returns "Hello World" in JavaScript, you can use a technique called "function currying". This involves creating a function that returns another function that has access to the original function's variables.

```
function createHelloWorld() {
  const greeting = "Hello World";
  
  return function() {
    return greeting;
  };
}
```