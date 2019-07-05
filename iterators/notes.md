# Iterators

```js
const numbers = [4, 5, 6];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
```

1. Process of accessing each element
2. What we want to do to each element

## Returning a function from another function

```js
function createNewFunction() {
  function add2(num) {
    return num + 2;
  }
  return add2;
}

const newFunction = createNewFunction();
const result = newFunction(3);
```

## Iterator Example

```js
function createFunction(array) {
  let i = 0;
  function inner() {
    const element = array[i];
    i++;
    return element;
  }
  return inner;
}

const returnNextElement = createFunction([4, 5, 6]);

const element1 = returnNextElement();
// 4
const element2 = returnNextElement();
// 5
```

JavaScript's built in iterators are objects with a next method that when called return the next element from the list

```js
function createFlow(array) {
  let i = 0;
  const inner = {
    next: () => {
      const element = array[i];
      i++;
      return element;
    }
  };
  return inner;
}

const returnNextElement = createFlow([4, 5, 6]);
const element1 = returnNextElement.next();
// 4
const element2 = returnNextElement.next();
// 5

function createFlow(array) {
  let i = 0;
  let length = array.length - 1;
  let done = false;

  const inner = {
    next: () => {
      if (i === length) {
        done = true;
      }
      const element = { value: array[i], done };
      i++;
      return element;
    }
  };
  return inner;
}

const returnNextElement = createFlow([4, 5, 6]);
const element1 = returnNextElement.next();
console.log(element1);
const element2 = returnNextElement.next();
console.log(element2);

const element3 = returnNextElement.next();
console.log(element3);
```

### Dynamically setting data

```js
function* createFlow() {
  const num = 10;
  const newNum = yield num;
  yield 5 + newNum;
  yield 6;
}

const returnNextElement = createFlow();
// newNum is undefined and the return value of element1 is 10
const element1 = returnNextElement.next(); // 10
const element2 = returnNextElement.next(2); // 7
```

## Async Generators

```js
function doWhenDataReceived(value) {
  returnNextElement.next(value);
}

function* createFlow() {
  const data = yield fetch("http://twitter.com/will/tweets/1");
  console.log(data);
}

const returnNextElement = createFlow();
const futureData = returnNextElement.next();

futureData.then(doWhenDataReceived);
```
