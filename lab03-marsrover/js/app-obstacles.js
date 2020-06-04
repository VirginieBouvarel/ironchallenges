/**
 * Mars Rover with Obstacles
 */


// Rover Object Goes Here
// ======================
let rover = {
    x: 0,
    y: 0,
    direction: "S",
    travelLog: []
}

let path = "fffflfffrffffrflfflfffffffff";
let travel = rover.travelLog;

let obstacles = [[3,1], [7,2 ], [2,4], [6,6], [1,8]];

// ======================
function move(path) {
    //start coordinates
    travel.push([rover.x, rover.y]);
    //travel
    for (let i = 0; i < path.length; i++) {
        console.log("move number: " + i);
        switch (path[i]) {
            case "f":
                moveForward(rover);
                break;
            case "r":
                turnRight(rover);
                break;
            case "l":
                turnLeft(rover);
                break;
            default:
                console.log("invalid command");
                break;
        }
    }
    //print travel
    console.log("Rover's travel: " + travel);
}
function moveForward(rover) {
    switch (rover.direction) {
        case "N":
            nextX = rover.x;
            nextY = rover.y - 1;
            nextPosition = verifyNextPosition(nextX, nextY);
            break;
        case "E":
            nextX = rover.x + 1;
            nextY = rover.y;
            nextPosition = verifyNextPosition(nextX, nextY);
            break;
        case "S":
            nextX = rover.x;
            nextY = rover.y + 1;
            nextPosition = verifyNextPosition(nextX, nextY);
            break;
        case "W":
            nextX = rover.x - 1;
            nextY = rover.y;
            nextPosition = verifyNextPosition(nextX, nextY);
            break;
    }
    if (nextPosition){
        roverGO(nextX, nextY);
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

function verifyNextPosition(nextX, nextY) {
    let offgrid = isOffgrid(nextX,nextY);
    let obstacle = isObstacle(nextX,nextY);

    if (offgrid || obstacle){
        return false;
    }else{
        return true;
    }
}

function isOffgrid(nextX,nextY){
    if (nextX < 0 || nextX > 9 || nextY < 0 || nextY > 9){
        console.log("Off-grid:rover doesn't move");
        return true; 
    }else{
        return false;
    }
}
function isObstacle(nextX,nextY){
    console.log("next case :" + nextX +"/" + nextY);
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
function roverGO(nextX, nextY){
    console.log("It's ok, rover move forward");
    rover.x = nextX;
    rover.y = nextY;
    console.log("New position: x:" + rover.x + ", y:" + rover.y);
    travel.push([rover.x, rover.y]);
}

move(path);