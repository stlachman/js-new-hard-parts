// CHALLENGE 1

function sumFunc(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Uncomment the lines below to test your work
const array = [1, 2, 3, 4];

console.log(sumFunc(array)); // -> should log 10

function returnIterator(arr) {
  let i = 0;
  return () => {
    const element = arr[i];
    i++;
    return element;
  };
}

// Uncomment the lines below to test your work
const array2 = ["a", "b", "c", "d"];
const myIterator = returnIterator(array2);
console.log(myIterator()); // -> should log 'a'
console.log(myIterator()); // -> should log 'b'
console.log(myIterator()); // -> should log 'c'
console.log(myIterator()); // -> should log 'd'

// CHALLENGE 2

function nextIterator(arr) {
  let i = 0;
  const iteratorObj = {
    next: () => {
      const element = arr[i];
      i++;
      return element;
    }
  };
  return iteratorObj;
}

// Uncomment the lines below to test your work
const array3 = [1, 2, 3];
const iteratorWithNext = nextIterator(array3);
console.log(iteratorWithNext.next()); // -> should log 1
console.log(iteratorWithNext.next()); // -> should log 2
console.log(iteratorWithNext.next()); // -> should log 3

// CHALLENGE 3

function sumArray(arr) {
  let sum = 0;
  let length = arr.length;
  const iteratorWithNext = nextIterator(arr);
  while (length > 0) {
    sum += iteratorWithNext.next();
    length--;
  }
  return sum;
}

// Uncomment the lines below to test your work
const array4 = [1, 2, 3, 4];
console.log(sumArray(array4)); // -> should log 10

// CHALLENGE 4

function setIterator(set) {
  const iterator = set.values();
  const iteratorObj = {
    next: () => {
      const element = iterator.next();
      return element.value;
    }
  };
  return iteratorObj;
}

// Uncomment the lines below to test your work
const mySet = new Set("hey");
const iterateSet = setIterator(mySet);
console.log(iterateSet.next()); // -> should log 'h'
console.log(iterateSet.next()); // -> should log 'e'
console.log(iterateSet.next()); // -> should log 'y'

// CHALLENGE 5
function indexIterator(arr) {
  let i = 0;
  const iteratorObj = {
    next: () => {
      const element = [i, arr[i]];
      i++;
      return element;
    }
  };
  return iteratorObj;
}

// Uncomment the lines below to test your work
const array5 = ["a", "b", "c", "d"];
const iteratorWithIndex = indexIterator(array5);
console.log(iteratorWithIndex.next()); // -> should log [0, 'a']
console.log(iteratorWithIndex.next()); // -> should log [1, 'b']
console.log(iteratorWithIndex.next()); // -> should log [2, 'c']

// CHALLENGE 6

function Words(string) {
  this.str = string;
  this.str = this.str.match(/\w+/g);
  return this.str;
}

Words.prototype[Symbol.iterator] = function() {};

// Uncomment the lines below to test your work
const helloWorld = new Words("Hello World");
for (word of helloWorld) {
  console.log(word);
} // -> should log 'Hello' and 'World'

// CHALLENGE 7
function valueAndPrevIndex(array) {
  let i = 0;
  const inner = {
    sentence: () => {
      const prevIndex =
        i === 0
          ? `${array[i]} is the first index`
          : `${array[i]} was found after index ${i - 1}`;
      const element = prevIndex;
      i++;
      return element;
    }
  };
  return inner;
}

const returnedSentence = valueAndPrevIndex([4, 5, 6]);
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());
console.log(returnedSentence.sentence());

// CHALLENGE 8
function* createConversation(string) {
  if (string === "english") {
    function printHello() {
      console.log("hello there");
    }
    global.setInterval(printHello, 3000);
  } else {
    function printGibberish() {
      console.log("gibberish");
    }
    global.setInterval(printGibberish, 3000);
  }
}

console.log(createConversation("sda").next());

//CHALLENGE 9
function waitForVerb(noun) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`${noun} runs`);
    }, 3000);
  });
}

async function f(noun) {
  const result = await waitForVerb(noun);
  console.log(result);
}

f("dog");
