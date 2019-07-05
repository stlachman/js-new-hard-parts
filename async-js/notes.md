# JavaScript The New Hard Parts

## JavaScript Execution Context

Thread of execution (parsing and executing the code line after line)
Live memory of variables with data (known as Global Variable Environment)

## Asynchronous JavaScript

```js
function printHello() {
  console.log("Hello");
}

setTimeout(printHello, 1000);

console.log("Me first!");
```

```js
function printHello() {
  console.log("Hello");
}

function blockFor1Sec() {
  // blocks JS thread for 1 second
}

setTimeout(printHello, 1000);

blockFor1Sec();

console.log("Me first!");

// Callback Queue - JavaScript Engine Feature
// Event loop
// Is the call stack empty?
// If it is empty, then it is allowed back on the call stack
// If isn't empty, then wait and check again
```
