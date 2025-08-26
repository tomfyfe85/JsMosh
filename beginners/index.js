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

const movie = {
  title: "a",
  year: 1995,
  rating: 4.5,
  director: "b",
};

function showProperties(obj) {
  for (const prop in obj) {
    if (typeof obj[prop] === "string") console.log(obj[prop], prop);
  }
}

console.log(showProperties(movie));
