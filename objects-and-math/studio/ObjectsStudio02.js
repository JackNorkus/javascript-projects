// Code your orbitCircumference function here:

let orbitCircumference = (radius) => Math.round(2 * Math.PI * radius);

// Code your missionDuration function here:

function missionDuration(numOrbits, orbitRadius, orbitSpeed) {
  let radius = orbitRadius || 2000;
  let speed = orbitSpeed || 28000;
  let totalOrbitLength = numOrbits * orbitCircumference(radius);
  return (totalOrbitLength / speed).toFixed(2);
}

console.log(`The mission will travel ${5 * orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} hours to complete.`);

// Copy/paste your selectRandomEntry function here:

function selectRandomEntry(arr) {
  let index = Math.floor(Math.random() * arr.length)
  return arr[index];
}

// Code your oxygenExpended function here:

function oxygenExpended(candidate, orbitRadius, orbitSpeed) {
  let radius = orbitRadius || 2000;
  let speed = orbitSpeed || 28000;
  let spacewalkDuration = missionDuration(3, radius, speed);
  let oxygenConsumed = candidate.o2Used(spacewalkDuration).toFixed(3);
  return `${candidate.name} will perform the spacewalk, which will last\
  ${spacewalkDuration} hours and require ${oxygenConsumed} kg of oxygen.`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];

 console.log(oxygenExpended(candidateC));
 