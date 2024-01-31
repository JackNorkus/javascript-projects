// function moveFunction() {
//    let numSteps = Math.round(Math.random() * 10);
//    return numSteps;
// } WRONG CODE: Don't do it this way!

let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.round(Math.random()*10)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function () {return Math.round(Math.random()*10)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 3,
   move: function () {return Math.round(Math.random()*10)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.round(Math.random()*10)}
};

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: function () {return Math.round(Math.random()*10)}
};

let crew = [superChimpOne, superChimpTwo, salamander, dog, tardigrade];

function crewReports(animalObject) {
   return `${animalObject.name} is a ${animalObject.species}.\
 They are ${animalObject.age} years old and ${animalObject.mass} kilograms.\
 Their ID is ${animalObject.astronautID}.`
}

function fitnessTest(arr) {
   let resultsArray = [];
   let totalSteps = 0;
   let iteration = 0;
   for (let i = 0; i < arr.length; i++) {
      while (totalSteps < 20) {
         totalSteps += arr[i].move();
         //console.log(totalSteps); for debugging
         iteration++;
      }
      resultsArray.push(`${arr[i].name} took ${iteration} turns to take 20 steps.`)
      iteration = 0;
      totalSteps = 0;
   }
   return resultsArray;
}

console.log(crewReports(dog));
console.log(fitnessTest(crew));

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!