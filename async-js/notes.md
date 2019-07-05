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

### Microtask Queue

```js
function display(data) {
  console.log(data);
}
function printHello() {
  console.log("Hello");
}

function blockFor300ms() {
  // block thread for 300ms
}

setTimeout(printHello, 0);

const futureData = fetch("https://twitter.com/tweets/1");
futureData.then(display);

blockFor300ms();

console.log("Me First!");

// 1. Me first, 2. blockFor300ms(), 3. tweet from futureData/display, then Hello

Microtask queue

https://www.ecma-international.org/ecma-262/7.0/#sec-jobs-and-job-queues
```
