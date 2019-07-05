// Challenge 1

function sayHello() {
  function printHello() {
    console.log("Hello!");
  }
  setTimeout(printHello, 1000);
}

// Uncomment the line below when ready
sayHello(); // should log "Hello" after 1000ms

// Challenge 2

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved!");
  }, 1000);
});

promise.then(value => console.log(value));
// Should print out "Resolved!"

// Challenge 3
promise = new Promise(function(resolve, reject) {
  reject("Rejected");
});

promise.catch(value => console.log(value));

// Challenge 4

promise = new Promise((resolve, reject) => {
  resolve();
});

promise.then(() => console.log("Promise has been resolved!"));
console.log("I'm not the promise!");

// Challenge 5

function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

delay().then(sayHello);
