//distanceFromHqInBlocks();

let clientDistance=43;
function distanceFromHqInBlocks(clientDistance){ 
    
    if (clientDistance>42){
        return clientDistance-42;
    }
    else{
        return 42-clientDistance;
    }
}

//distanceFromHqInFeet

function distanceFromHqInFeet(distance){
   
   return distanceFromHqInBlocks(distance)*264;//changes blocks into feet
   
}

//distanceTravelledInFeet

function distanceTravelledInFeet(start,destination){
    return Math.abs(destination-start)*264;

}
//calculatesFarePrice

function calculatesFarePrice(start, destination){
    if (distanceTravelledInFeet(start,destination)<=400){
        return 0;
    }
    else if(distanceTravelledInFeet(start,destination)>=400 && distanceTravelledInFeet(start,destination)<=2000){
        return(distanceTravelledInFeet(start,destination)-400)*0.02;//0.02 refers to 2 cents
    }
    else if(distanceTravelledInFeet(start,destination)>=2000 && distanceTravelledInFeet(start,destination)<=2500){
        return (distanceTravelledInFeet(start,destination)-400)*0.25;
    }
    return "cannot travel that far";

}
// Code your solution in this file!
