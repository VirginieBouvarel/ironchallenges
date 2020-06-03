/**
 * Mars Rover with Obstacles
 */


// Rover Object Goes Here
// ======================
let rover = {
    x:0,
    y:0,
    direction:"S",
    move:"forward",
    travelLog:[]
  }

let path = "fffflfffrffffrflfflfffffffff";
let travel = rover.travelLog;
  
let obstacles = [[1,3], [2,7],[4,2],[6,6], [8,1]];
  
  // ======================
  function turnLeft(rover){
    console.log("turnLeft was called!");
    switch(rover.direction){
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
  
  function turnRight(rover){
    console.log("turnRight was called!");
    switch(rover.direction){
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
  
  function moveForward(rover){
    console.log("moveForward was called")
    if (rover.move === "forward"){
      switch(rover.direction){
        case "N":
          if (rover.y - 1 < 0){
            console.log("Warning: Off-grid movement");
          }else{
            rover.y -= 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "E":
          if (rover.x + 1 > 9){
            console.log("Warning: Off-grid movement");
          }else{
            rover.x += 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "S":
          if (rover.y + 1 > 9){
            console.log("Warning: Off-grid movement");
          }else{
            rover.y += 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "W":
          if (rover.x - 1 < 0){
            console.log("Warning: Off-grid movement");
          }else{
            rover.x -= 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
      }
    }
  }
  
  function moveBackward(rover){
    console.log("moveBackward was called")
    if (rover.move === "backward"){
      switch(rover.direction){
        case "N":
          if (rover.y + 1 > 9){
            console.log("Warning: Off-grid movement");
          }else{
            rover.y += 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "E":
          if (rover.x - 1 < 0){
            console.log("Warning: Off-grid movement");
          }else{
            rover.x -= 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "S":
          if (rover.y - 1 < 0){
            console.log("Warning: Off-grid movement");
          }else{
            rover.y -= 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
          break;
        case "W":
          if (rover.x + 1 > 9){
            console.log("Warning: Off-grid movement");
          }else{
            rover.x += 1;
            console.log("Rover position: x:" + rover.x + ", y:" + rover.y);
            travel.push([rover.x,rover.y]);
          }
      }
    }
  }
  
  function move(path){
    //start coordinates
    travel.push([rover.x,rover.y]);
    //travel
    for (let i = 0; i < path.length; i++){
      switch(path[i]){
        case "f":
          rover.move = "forward";
          moveForward(rover, travel);
          break;
        case "b":
          rover.move = "backward";
          moveBackward(rover, travel);
          break;
        case "r":
          turnRight(rover, travel);
          break;
        case "l":
          turnLeft(rover, travel);
          break;
        default:
          console.log("invalid command");
          break;
      }
    }
    //print travel
    console.log("Rover's travel: " + travel);
  }
  
  function verifyNextPosition(nextX,nextY){
    let isPossible = true;
    for (let i = 0; i < obstacles.length; i++){
      if (nextX === obstacles[i][0] && nextY === obstacles[i][1]){
        isPossible = false;
      }
    }
    if (isPossible === false){
      console.log("Warning: Obstacle!");
    }
  }