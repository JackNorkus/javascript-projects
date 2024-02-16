//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }

    addScore(score) {
        this.scores.push(score);
    }

    average() {
        let sum = 0
        let average = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        average = Number((sum / this.scores.length).toFixed(1));
        return average;
    }

    status() {
        let status = "";
        if (this.average() >= 90) {
            status = "Accepted";
        } else if (this.average() >= 80) {
            status = "Reserve";
        } else if (this.average() >= 70) {
            status = "Probationary";
        } else {
            status = "Rejected";
        }
        return status;
    }
}

let bear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let dog = new CrewCandidate("Merry Maltese", 1.5, [93, 88, 97]);
let alligator = new CrewCandidate("Glad Gator", 225, [75, 78, 62]);

console.log(bear);
console.log(dog);
console.log(alligator);

bear.addScore(83);
console.log(bear.scores);

console.log(dog.average());

console.log(`${bear.name} earned an average test score of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${dog.name} earned an average test score of ${dog.average()} and has a status of ${dog.status()}.`);
console.log(`${alligator.name} earned an average test score of ${alligator.average()} and has a status of ${alligator.status()}.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

function boostGatorStatusToReserve() {
    let numOfBoosts = 0;
    while (alligator.status() != "Reserve") {
        alligator.addScore(100);
        numOfBoosts++;
    }
    return numOfBoosts;
}

globalNumOfBoostsReserve = boostGatorStatusToReserve();

function boostGatorStatusToAccepted() {
    let numOfBoosts = globalNumOfBoostsReserve;
    while (alligator.status() != "Accepted") {
        alligator.addScore(100);
        numOfBoosts++;
    }
    return numOfBoosts;
}

globalNumOfBoostsAccepted = boostGatorStatusToAccepted();

console.log(`It will take a minimum of ${globalNumOfBoostsReserve} tests to get Glad Gator to 'Reserve' status.`);
console.log(`It will take a minimum of ${globalNumOfBoostsAccepted} tests to get Glad Gator to 'Accepted' status.`);