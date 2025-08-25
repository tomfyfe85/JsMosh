// for (let i = 0; i <= 5; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

// for
// while
// do-while

// for-in loop
// const person = {
//   name: "Tom",
//   age: 30,
// };

// for (let key in person) console.log(key, person[key]);

// const colours = ["red", "green", "blue"];

// // for (let i in colours) console.log(i, colours[i]);

// // for-of loop
// for (let colour of colours) console.log(colour);

let number = maximumFinder(1, 2);
console.log(number);

function maximumFinder(num1, num2) {
  return num1 > num2 ? num1 : num2;
}
