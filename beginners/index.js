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
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {
//       console.log("draw");
//     },
//   };
// }

// // const myCircle = createCircle(5);
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

// const circle = {
//   radius: 1,
//   draw() {
//     console.log("draw");
//   },
// };

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

// function factory(street, city, zip) {
//   return {
//     street,
//     city,
//     zip,
//   };
// }

// const address = factory(1, 2, 3);
// console.log(address);

// function NewAddress(street, city, zip) {
//   (this.street = street), (this.city = city), (this.zip = zip);
// }

// const newAddress1 = new NewAddress(1, 2, 3);
// const newAddress2 = new NewAddress(1, 2, 3);

// function areEqual(address1, address2) {
//   const keys1 = Object.keys(address1);
//   const keys2 = Object.keys(address2);

//   if (keys1.length !== keys2.length) return false;

//   for (let key of keys1) {
//     if (!keys2.includes(key)) return false;
//   }
//   return true;
// }

// console.log(areEqual(newAddress2, newAddress1));

// console.log(areEqual(newAddress1, { street: 123, city: "london", zip: 12221 }));

// function areSame(address1, address2) {
//   return address1 === address2;
// }

// const blogPost = {
//   title: "t",
//   body: "b",
//   comments: [
//     {
//       author: "a",
//       body: "B",
//     },
//     {
//       author: "c",
//       body: "d",
//     },
//   ],
//   isLive: true,
// };

// const priceRangeObjects = [{low:0, high:10}]

// ARRAYS

// adding elements
// const nums = [3, 4];
// nums.push(5, 6);
// nums.unshift(1, 2);
// nums.push(7);
// nums.splice(1, 4, "hi");
// console.log(nums);

// Finding primitive types
// const numbers = [1, 2, 3, 1, 4];
// numbers.indexOf(2);
// // with indexOf, if the given arguement is not in the array, it will return -1

// numbers.indexOf(2,1)
// // this will start searching from an element that matches 2, from index 1
// numbers.lastIndexOf(1);

// // to see if an given element is present is an array use:
// console.log(numbers.indexOf(2) !== -1);
// // or
// console.log(numbers.includes(1));
// console.log(numbers.lastIndexOf(1));

// Finding reference types
// const courses = [
//   { id: 1, name: "a" },
//   { id: 2, name: "b" },
// ];
// // If you have an array with refrence types, like objects, use the find method

// const course = courses.find((course) => course.name === "a");
// console.log(course);

// const course1 = courses.findIndex((course) => course.name === "a");
// console.log(course1);

// Removing elements:
//  pop() - remove from end
//  shift() - remove from start
//  .splice(index_to_be_removed, elements to be removed from stated index)
//  IE .splice(3, 1) - removes element at index 3
//  IE .splice(3,2) - removes elements at index 3 and 4

//  Emptying an array
//  nums = [1,2,3,4]
//  nums = []
//  nums.length = 0 - trucates the array - prefered

//  Combing and slicing arrays
//  Use .concat to combine arrays
//   first = [1,2,3]
// second = [4,5,6]
// new = first.concat(second); - returns new array
//  .slice slices an array in two
//  new.slice(2,4) - [3,4] - starts at index2 and finsihes the one before index 4
//  new,slice(2) - [3,4,5,6] - slices all up to given index
//  new.slice() returns a copy of the original

//  the spread operator:
//  conwst combined = [...first, ...second] - [1,2,3,4,5,6]
//  with the spread operator, all elements are returned individually
//  conwst combined = [...first, "hi" ...second] - [1,2,3, "hi", 4,5,6]
//  const copy = [...combined] - creates a new array

// ITERATING:
//  const nums = [1,2,3,4]
//  use a for of loop OR
//  nums.forEach(number => function logic here));
//  nums.forEach(number, index => function logic here));
//  indexes can be accessed like this

// getting indexes with the for in loop
// const fruits = ['apple', 'banana', 'cherry'];
// for (const [index, fruit] of fruits.entries()) {
//   console.log(`Index: ${index}, Value: ${fruit}`);
// }

// JOINING ARRAYS
// const nums = [1,2,3,4]
// nums.join() - returns a string  "1234"
// new = nums.join(',') - "1,2,3,4"
//  new.split(",") is the same for strings - ["1", "2", "3", "4"]

// Sorting arrays
// const nums = [2,3,1]
// nums.sort()
// nums.reverse() sorts in reverse

//  with objects
// .sort() takes a function with 2 parameters a & b
// const courses = [
//   { id: 1, name: "node" },
//   { id: 2, name: "js" },
// ];

// courses.sort((a, b) => {
//   const nameA = a.name.toUpperCase();
//   const nameB = b.name.toUpperCase();

//   if (a.name < b.name) return -1;
//   if (a.name > b.name) return 1;
//   return 0;
// });

// console.log(courses);

//EVERY - checks if every matches criteria
//  returns a callback
// nums = [1,2,3,4,5]
// const allPos = numbers.every(value => return value >= 0 )
// returns a boolean

// filtering an Array
// const nums = [1, 2, -1, 4, 5];

// const filtered = nums.filter((value) => value >= 0);
// console.log(filtered);
// // [1,2,4,5]

// // MAP method
// const items = filtered.map((n) => "<li>" + n + "<li>");
// console.log(items);
// => ['<li>1<li>', '<li>2<li>', '<li>4<li>', '<li>5<li>']

// Both return a new array and are chainable

// const items = filtered.map((n) => ({ value: n }));
// when returning an object you need to put them in () like ({object})

// chained
// const items = nums.filter((n) => n >= 0).map((n) => ({ value: n }));

// REDUCE method
//  reduce elements into a single value
//  const nums = [3, 2, 5]
//  .reduce takes a call back with 2 params and 2 arguments

//  const sum = nums.reduce((accumulator, currentVal) =>{
//  return accumulator + currentVal
//   }, set accumulator - 0)
//  If no accumulator is set, it is automaticall set to the first elemen

//  const sum = nums.reduce((accumulator, currentVal) => accumulator + currentVal )
//  If no accumulator is set, it is automaticall set to the first element

// EXERCISE 1
// const nums = arrayFromRange(-10, -4);

// console.log(nums);

// function arrayFromRange(min, max) {
//   const rangeArray = [];
//   for (let i = min; i <= max; i++) rangeArray.push(i);
//   return rangeArray;
// }

// EXERCISE 2
// write an includes method
// const nums = [1, 2, 3, 4, 5];

// console.log(includes(nums, 3));
// console.log(includes(nums, 7));

// function includes(array, ele) {
//   return array.some((num) => num === ele);
// }

// const numbers = [1, 2, 3, 4, 1, 1];

// const output = except(numbers, [1, 4]);

// // expected output - [2,4]

// console.log(output);

// function except(array, excluded) {
//   const output = [];
//   for (let num of array) if (!excluded.includes(num)) output.push(num);

//   return output;
// }

// moving an element
// use console.error

// return output;
// }
