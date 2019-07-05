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
