for (let i = 0; i <= 5; i++) {
  if (i % 2 !== 0) console.log(i);
}

// for
// while
// do-while

// for-in loop
const person = {
  name: "Tom",
  age: 30,
};

for (let key in person) console.log(key, person[key]);

const colours = ["red", "green", "blue"];

for (let i in colours) console.log(i, colours[i]);
