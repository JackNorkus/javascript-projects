// Declare and initialize the variables for exercise 1 here:

engineIndicatorLight = "red blinking";
spaceSuitsOn = true
shuttleCabinReady = true
crewStatus = spaceSuitsOn && shuttleCabinReady
computerStatusCode = 200
shuttleSpeed = 15000

// BEFORE running the code, predict what will be printed to the console by the following statements:
// "engines are off" will be printed
if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
