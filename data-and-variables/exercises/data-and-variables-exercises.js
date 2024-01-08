// Declare and assign the variables below
let nameOfShuttle = "Determination";
let shuttleSpeed = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
const milesPerKm = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof nameOfShuttle);
console.log(typeof shuttleSpeed);
console.log(typeof marsDistanceKm);
console.log(typeof moonDistanceKm);
console.log(typeof milesPerKm);
// Calculate a space mission below
let marsDistanceMiles = marsDistanceKm * milesPerKm;
let hoursToMars = marsDistanceMiles / shuttleSpeed;
let daysToMars = hoursToMars / 24;
// Print the results of the space mission calculations below
console.log(nameOfShuttle + " will take " + daysToMars + " days to reach Mars.");
// Calculate a trip to the moon below
let moonDistanceMiles = moonDistanceKm * milesPerKm;
let hoursToMoon = moonDistanceMiles / shuttleSpeed;
let daysToMoon = hoursToMoon / 24;
// Print the results of the trip to the moon below
console.log(nameOfShuttle + " will take " + daysToMoon + " days to reach the Moon.");