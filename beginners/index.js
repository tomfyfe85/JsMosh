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

function findPrime(iteration) {
  for (let factor = 2; factor <= iteration - 1; factor++)
    if (iteration % factor == 0) return true;
}

function showPrime(num) {
  for (let number = 2; number <= num; number++) {
    if (findPrime(number)) continue;
    else console.log(number);
  }
}

showPrime(50);
