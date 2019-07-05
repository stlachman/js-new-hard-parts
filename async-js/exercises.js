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

// Challenge 6
const secondPromise = new Promise((resolve, reject) => {
  resolve("Second!");
});
const firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
});

firstPromise.then(value => console.log(value));

// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 }
];

const fakeAPICall = i => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  let result = [];
  for (let i = 0; i < fakePeople.length; i++) {
    result.push(fakeAPICall(i));
  }
  return Promise.all(result)
    .then(values => {
      return values;
    })
    .catch(err => {
      console.log(err);
    });
}

getAllData().then(values => console.log(values));
