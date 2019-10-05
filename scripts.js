// Write your JavaScript code here.
// Remember to pay attention to page loading!

function init () {
    let takeOff = document.getElementById("takeoff");
    let landing = document.getElementById("landing");
    let missionAbort = document.getElementById("missionAbort");
    let shuttleBackground = document.getElementById("shuttleBackground");
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let rocketImage = document.getElementById("rocket");
    let button = {
        up: document.getElementById("up"),
        down: document.getElementById("down"),
        right: document.getElementById("right"),
        left: document.getElementById("left")
    }
    let height = Number(document.getElementById("spaceShuttleHeight").innerHTML);

    console.log("The page is fully loaded.");
    rocketImage.style.top = parseInt(shuttleBackground.clientHeight) - 75 + "px";

    takeOff.addEventListener("click", function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
          document.getElementById("flightStatus").innerHTML = 'Shuttle in flight.';
          document.getElementById("shuttleBackground").style.backgroundColor = "blue";
          rocketImage.style.top = (parseInt(rocketImage.style.top)-10) + "px";
          rocketImage.style.left = "0px";
          shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 10000;
        }
      })
    
    landing.addEventListener("click", function() {
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
        rocketImage.style.top = parseInt(shuttleBackground.clientHeight) - 75 + "px";
    })

    missionAbort.addEventListener("click", function() {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = 'Mission aborted.';
            document.getElementById("shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
            rocketImage.style.top = parseInt(shuttleBackground.clientHeight) - 75 + "px";
        }
    })

    moveRocket(button,rocketImage,shuttleHeight,shuttleBackground);

}

function moveRocket(buttonObject,imageToMove,heightToChange,background){
    for(let buttons in buttonObject ){
        buttonObject[buttons].addEventListener("click",() => {
        if (buttons === "up"  && parseInt(imageToMove.style.top) > 0){
            imageToMove.style.top = (parseInt(imageToMove.style.top)-10) + "px";    
            heightToChange.innerHTML = parseInt(heightToChange.innerHTML)+10000;
        } else if (buttons === "down" && parseInt(imageToMove.style.top) < parseInt(background.clientHeight)-75){
            imageToMove.style.top = (parseInt(imageToMove.style.top)+10) + "px";
            heightToChange.innerHTML = parseInt(heightToChange.innerHTML)-10000;
        } else if (buttons === "left" && parseInt(imageToMove.style.left) > -1 * (parseInt(background.clientWidth)/2)+20){
            imageToMove.style.left = (parseInt(imageToMove.style.left)-10) + "px";
        } else if (buttons === "right" && parseInt(imageToMove.style.left) < (parseInt(background.clientWidth)/2)-20){
            imageToMove.style.left = (parseInt(imageToMove.style.left)+10) + "px";
        }   
        });
    }
}

window.onload = init;