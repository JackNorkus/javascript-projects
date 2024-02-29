// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {
    const takeoffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const abortButton = document.getElementById("missionAbort");
    const upButton = document.getElementById("up");
    const downButton = document.getElementById("down");
    const leftButton = document.getElementById("left");
    const rightButton = document.getElementById("right");
    const rocketImg = document.getElementById("rocket");
    let yOffset = rocketImg.offsetTop;
    let xOffset = rocketImg.offsetLeft;
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const spaceShuttleHeight = document.getElementById("spaceShuttleHeight");

    takeoffButton.addEventListener('click', event => {
        let takeoffWindow = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (takeoffWindow) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = 'blue';
            spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        }
    });

    landButton.addEventListener('click', event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = 'green';
        spaceShuttleHeight.innerHTML = 0;
    });

    abortButton.addEventListener('click', event => {
        let abortWindow = window.confirm("Confirm that you want to abort the mission.");
        if (abortWindow) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = 'green';
            spaceShuttleHeight.innerHTML = 0;
        }
    });

    upButton.addEventListener('click', event => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) + 10000;
        yOffset = yOffset - 10;
        rocketImg.style.top = yOffset + 'px';
    });

    downButton.addEventListener('click', event => {
        spaceShuttleHeight.innerHTML = parseInt(spaceShuttleHeight.innerHTML) - 10000;
        yOffset = yOffset + 10;
        rocketImg.style.top = yOffset + 'px';
    });

    leftButton.addEventListener('click', event => {
        xOffset = xOffset - 10;
        rocketImg.style.left = xOffset + 'px';
    });

    rightButton.addEventListener('click', event => {
        xOffset = xOffset + 10;
        rocketImg.style.left = xOffset + 'px';
    });

});