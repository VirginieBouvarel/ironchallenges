/**
 * Mars Rovers Game
 */

let winner = "";

let rover0 = {
    name: "rover0",
    x: 0,
    y: 0,
    direction:"S",
    path:"fffflfffrffffrflfflffffffffffff",
    travelLog:[]
}
let rover1 = {
    name: "rover1",
    x: 1,
    y: 0,
    direction:"S",
    path:"fffflfrflffffffrfffflffffffffff",
    travelLog: []
}
let rover2 = {
    name: "rover2",
    x: 9,
    y: 2,
    direction:"W",
    path:"flfffrfffflfrfflffflfffffffffff",
    travelLog: []
}


let travelLog0 = rover0.travelLog;
let travelLog1 = rover1.travelLog;
let travelLog2 = rover2.travelLog;

let obstacles = [[3,1], [7,2 ], [2,4], [6,6], [1,8]];
let map = [];

/******************************************************************************************************************/
function game(){
    //on construit la grille html
    buildBoard();
    //on construit la map contenant les déplacements des 3 rovers pour la lire case par case
    buildMap(rover0, rover1, rover2);
    //On inscrit la position de départ de chaque rover dasn son travelLog
    travelLog0.push([rover0.x, rover0.y]);
    travelLog1.push([rover1.x, rover1.y]);
    travelLog2.push([rover2.x, rover2.y]);
    console.log(travelLog0);
    console.log(travelLog1);
    console.log(travelLog2);
    //on fait avancer les rovers d'un mouvement, chacun à leur tour, jusqu'à avoir lu toute la map
    move(rover0, rover1, rover2);
    //on affiche le travellog de chaque rover
     //print travel
     console.log("Rover0's travel: " + travelLog0);
     console.log("Rover1's travel: " + travelLog1);
     console.log("Rover2's travel: " + travelLog2);
}
function buildBoard(){
    //on récupère la balise table
    let board = document.querySelector(".board");
    //on crée la table
    for (let i = 0; i < 10; i++){
        //on crée une ligne
        let row = document.createElement("tr");
        for (let j = 0; j < 10; j++){
            //on crée une case
            let cell = document.createElement("td");
            cell.setAttribute("class", `case${j}-${i}`);
            row.appendChild(cell);
        }
        board.appendChild(row);
    }
}
function buildMap(rover0, rover1, rover2){
    //on crée 31 lignes pour 31 tours
    for (let i = 0; i < 31; i++){
        //On rempli chaque ligne avec le mouvement correspondant pour chaque rover
        map.push([rover0.path[i], rover1.path[i], rover2.path[i]]);
    }
    console.log(map);    
}

function move(rover0, rover1, rover2){  

    //on lit la map ligne par ligne: une ligne pour un tour de jeu
    for (let i = 0; i < map.length; i++) {
        //On s'arrete si un winner est désigné
        if (winner !== ""){
            break;
        }
        console.log("Round: " + (i+1));
        //on fait avancer chaque rover
        for (let j = 0; j < 3; j++){
            //On s'arrete si un winner est désigné
            if (winner !== ""){
                break;
            }
            //on identifie le rover concerné
            let rover;
            let travelLog;
            if (j === 0){
                rover = rover0;
                travelLog = travelLog0;
            }
            if (j === 1){
                rover = rover1;
                travelLog = travelLog1;
            }
            if (j === 2){
                rover = rover2;
                travelLog = travelLog2;
            }
            console.log("--> " +rover.name);
            //On indique quelle mouvement doit être fait en fonction de l'indication de la map
            switch (map[i][j]) {
                case "f":
                    moveForward(rover, travelLog);
                    break;
                case "r":
                    turnRight(rover, travelLog);
                    break;
                case "l":
                    turnLeft(rover, travelLog);
                    break;
                default:
                    console.log("invalid command");
                    break;
            }
        }
        
    }  
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
    console.log(rover.name + " turns Right");
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
    console.log(rover.name + " turns Left");
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
    isTaken(rover, nextX, nextY);
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
        console.log(rover.name + " doesn't move, current position:" + rover.x + "/" + rover.y);
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
            console.log(rover.name + " doesn't move, current position:" + rover.x + "/" + rover.y);
            obstacle = true;
        }
    }
    return obstacle;
}
function isTaken(rover, nextX, nextY){
    if (rover.name === "rover0"){
        if (nextX === rover1.x && nextY ===rover1.y){
            console.log("BOOM! rover1 is dead!");
            gameOver(1);
        }else if (nextX === rover2.x && nextY === rover2.y){
            console.log("BOOM! rover2 is dead!");
            gameOver(2);
        }
    }else if (rover.name === "rover1"){
        if (nextX === rover0.x && nextY ===rover0.y){
            console.log("BOOM! rover0 is dead!");
            gameOver(0);
        }else if (nextX === rover2.x && nextY === rover2.y){
            console.log("BOOM! rover2 is dead!");
            gameOver(2);
        }
    }else{
        if (nextX === rover1.x && nextY ===rover1.y){
            console.log("BOOM! rover1 is dead!");
            gameOver(1);
        }else if (nextX === rover0.x && nextY === rover0.y){
            console.log("BOOM! rover0 is dead!");
            gameOver(0);
        }
    }
}
function isWinner(rover){
    if (rover.x=== 9 && rover.y=== 9){
        winner = rover.name;
        console.log("The winner is: " + winner);
    }
}
function roverGO(rover, nextX, nextY, travel){
    console.log("It's ok, "+ rover.name + " move forward");
    eraseRover(rover);
    rover.x = nextX;
    rover.y = nextY;
    displayRover(rover);
    console.log("New position: x:" + rover.x + ", y:" + rover.y);
    travel.push([rover.x, rover.y]);
    isWinner(rover);
    
}
function eraseRover(rover){
    let cell = document.querySelector('.case' + rover.x + '-' + rover.y);
    cell.innerHTML = "";
}
function displayRover(rover){
    let p = document.createElement("p");
    let color;
    let content;
    if(rover === rover0){
        color = "red";
        content = "R0";
    }else if (rover === rover1){
        color = "green";
        content = "R1";
    }else{
        color = "blue";
        content = "R2";
    }
    p.setAttribute("class", color);
    let text = document.createTextNode(content);
    p.appendChild(text);
    let cell = document.querySelector('.case' + rover.x + '-' + rover.y);
    cell.appendChild(p);
}
function gameOver(index){
    for (let i = 0; i < map.length; i++){
        map[i][index] = null;
    }
}
/*****************************************************************************************/

game();