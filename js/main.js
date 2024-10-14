let isMoving = false
console.log(isMoving);
moveElevator(0, 3);
console.log(isMoving);
moveElevator(3, 0);

function moveElevator(currentFloor, destinationFloor) {
    isMoving = true;
    let move="Sube";
    if (currentFloor<destinationFloor){
        console.log("Sube")
    }
    else{
        console.log("Baja");
    }
}

if (redLight=True){
    console.log("no pasar");
}
else if(yellowLight=true){
    console.log("no pasar");
}
else {
    console.log("pasar");
}
