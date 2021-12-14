// Code your solution in this file!
const headQuartersStreetNumber = 42;
function distanceFromHqInBlocks(locationStreetNumber){
    return (Math.abs(locationStreetNumber - headQuartersStreetNumber));
};

function distanceFromHqInFeet(locationStreetNumber){
    return distanceFromHqInBlocks(locationStreetNumber) * 264;
};

function distanceTravelledInFeet(start, destination){
    return Math.abs(start - destination) * 264
;}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    if (distanceTravelledInFeet(start, destination) < 400){
        return 0;
    } else if (distanceTravelledInFeet(start, destination) >= 400 && distanceTravelledInFeet(start, destination) <= 2000){
        return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    } else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        return 25
    } else {
        return 'cannot travel that far';
    };
};