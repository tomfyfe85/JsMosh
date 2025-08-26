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

console.log(sum(10));

function sum(limit) {
  let sum = 0;

  for (let i = 0; i <= limit; i++) {
    if (i % 3 === 0 || i % 5 === 0) sum += i;
  }

  return sum;
}
