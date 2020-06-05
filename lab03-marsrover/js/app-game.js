/**
 * Mars Rovers Game
 */


// Rover Object Goes Here
// ======================

let rover0 = {
    x: 0,
    y: 0,
    direction: "S",
    path:"fffflfffrffffrflfflffffffffffff",
    travelLog: []
}
let rover1 = {
    x: 9,
    y: 0,
    direction: "W",
    path:"fffffflfflfffrffffffflffffrffff",
    travelLog: []
}
let rover2 = {
    x: 9,
    y: 2,
    direction: "W",
    path:"flfffrfffflfrfflffflfffffffffff",
    travelLog: []
}

let obstacles = [[3,1], [7,2 ], [2,4], [6,6], [1,8]];
let paths;



function move(rover0, rover1, rover2) {
    //construction of the playground
   
    //start coordinates
 
    //travels
    for (let i = 0; i < path.length; i++) {
        console.log("move number: " + i);
        for (let j = 0; j < 3; j++){
            switch (roversPaths[i][j]) {
                case "f":
                    moveForward(rover[j], rover[j].travelLog);
                    break;
                case "r":
                    turnRight(rover[j], rover[j].travelLog);
                    break;
                case "l":
                    turnLeft(rover[j], rover[j].travelLog);
                    break;
                default:
                    console.log("invalid command");
                    break;
            }
        }
        
    }
    //print travel
    console.log("Rover0's travel: " + rover0.travelLog);
    console.log("Rover1's travel: " + rover1.travelLog);
    console.log("Rover2's travel: " + rover2.travelLog);
}
function moveForward(rover, travel) {
    let nextX = 0;
    let nextY = 0;
    let nextPosition = false;
    switch (rover.direction) {
        case "N":
            nextX = rover.x;
            nextY = rover.y - 1;
            break;
        case "E":
            nextX = rover.x + 1;
            nextY = rover.y;
            break;
        case "S":
            nextX = rover.x;
            nextY = rover.y + 1;
            break;
        case "W":
            nextX = rover.x - 1;
            nextY = rover.y;
            break;
    }
    nextPosition = verifyNextPosition(rover, nextX, nextY, travel);
    if (nextPosition){
        roverGO(rover, nextX, nextY, travel);
    }

}
function turnRight(rover) {
    console.log("Rover turns Right");
    switch (rover.direction) {
        case "N":
            rover.direction = "E";
            console.log("N -> " + rover.direction);
            break;
        case "E":
            rover.direction = "S";
            console.log("E -> " + rover.direction);
            break;
        case "S":
            rover.direction = "W";
            console.log("S -> " + rover.direction);
            break;
        case "W":
            rover.direction = "N";
            console.log("W -> " + rover.direction);
            break;
    }
}
function turnLeft(rover) {
    console.log("Rover turns Left");
    switch (rover.direction) {
        case "N":
            rover.direction = "W";
            console.log("N -> " + rover.direction);
            break;
        case "W":
            rover.direction = "S";
            console.log("W -> " + rover.direction);
            break;
        case "S":
            rover.direction = "E";
            console.log("S -> " + rover.direction);
            break;
        case "E":
            rover.direction = "N";
            console.log("E -> " + rover.direction);
            break;
    }
}

function verifyNextPosition(rover, nextX, nextY) {
    let offgrid = isOffgrid(rover, nextX, nextY);
    let obstacle = isObstacle(rover, nextX, nextY);

    if (offgrid || obstacle){
        return false;
    }else{
        return true;
    }
}
function isOffgrid(rover, nextX, nextY){
    console.log("next case :" + nextX +"/" + nextY);
    if (nextX < 0 || nextX > 9 || nextY < 0 || nextY > 9){
        console.log("Off-grid case " + nextX + "/" + nextY);
        console.log("Rover doesn't move, current position:" + rover.x + "/" + rover.y);
        return true; 
    }else{
        return false;
    }
}
function isObstacle(rover, nextX, nextY){
    let obstacle = false;
    for (let i = 0; i < obstacles.length; i++){
        if (nextX === obstacles[i][0] && nextY === obstacles[i][1]){
            console.log("Obstacle case " + obstacles[i][0] + "/" + obstacles[i][1]);
            console.log("Rover doesn't move, current position:" + rover.x + "/" + rover.y);
            obstacle = true;
        }
    }
    return obstacle;
}
function roverGO(rover, nextX, nextY, travel){
    console.log("It's ok, rover move forward");
    rover.x = nextX;
    rover.y = nextY;
    console.log("New position: x:" + rover.x + ", y:" + rover.y);
    travel.push([rover.x, rover.y]);
}

move(rover0, rover0.path, rover0.travelLog);
// move(rover1, rover1.path, rover1.travelLog);
// move(rover2, rover2.path, rover2.travelLog);
