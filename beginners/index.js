// const result = checkSpeed(799);
// console.log(result);

// function checkSpeed(speed) {
//   const speedLimit = 70;
//   const kmPerPoint = 5;

//   if (speed <= speedLimit) {
//     console.log("Ok");
//     return;
//   }

//   let points = Math.floor((speed - speedLimit) / kmPerPoint);
//   if (points >= 12) console.log("Licence suspended");
//   else console.log(points + " points");
// }

// console.log(sum(10));

// function sum(limit) {
//   let sum = 0;

//   for (let i = 0; i <= limit; i++) {
//     if (i % 3 === 0 || i % 5 === 0) sum += i;
//   }

//   return sum;
// }

// showStars(2);

// function showStars(rows) {
//   stars = "";
//   for (let i = 1; i <= rows; i++) {
//     stars += "*";
//     console.log(stars);
//   }
// }

// function findPrime(iteration) {
//   for (let factor = 2; factor < iteration; factor++)
//     if (iteration % factor == 0) return false;

//   return true;
// }

// function showPrime(num) {
//   for (letnumber = 2; number <= num; number++) {
//     if (findPrime(number)) console.log(number);
//   }
// }

// showPrime(50);

// factory function
// camel notation
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

// const myCircle = createCircle(5);
// myCircle.draw();

// constructor function
// pascal notation
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     consle.log("draw");
//   };
// }

// const myCircle = new Circle(1);
// console.log(myCircle.radius);

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

// for (key in circle) console.log(key, circle[key]);

// const arr = [1, 2, 3, 4];
// for (let key of Object.keys(circle)) console.log(circle[key]);

//
// if ("radius" in circle) console.log("yes");

// const another = {};
// for (let key in circle) another[key] = circle[key];
// console.log(another);

// New way is to use Object.assign

// const another = Object.assign({ colour: "yellow" }, circle);
// console.log(another);

// USE SPREAD OPERATOR
// const another = { ...circle };
// console.log(another);

// const message = "This is a\n message";
// console.log(message);

// Template literals

// const another = `This 'is'
// my string,

// Testing out lines,

// Thanks!`;
// console.log(another);

// Date Object

// const now = new Date();
// const date1 = new Date("May 11 2018 09:00");

// now.setHours(2, 45, 30, 200);

// const address = {
//   street: 123,
//   city: "london",
//   zip: "12221",
// };

function factory(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}

const address = factory(1, 2, 3);
console.log(address);

function NewAddress(street, city, zip) {
  (this.street = street), (this.city = city), (this.zip = zip);
}

const newAddress = new NewAddress(1, 2, 3);
console.log(newAddress);
