// Code your solution in this file!
const distanceFromHqInBlocks = (streetNum) => {
    if (streetNum >= 42) {
        return streetNum - 42;
    } else {
        return 42 - streetNum;
    }
}

const distanceFromHqInFeet = (streetNum) => {
    if (streetNum >= 42) {
        return ((streetNum - 42) * 264);
    } else {
        return ((42 - streetNum) * 264);
    }
}

const distanceTravelledInFeet = (street1, street2) => {
    if (street1 > street2) {
        return ((street1 - street2) * 264);
    } else {
        return ((street2 - street1) * 264);
    }
}

const calculatesFarePrice = (street1, street2) => {
    if (distanceTravelledInFeet(street1, street2) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(street1, street2) > 400 && distanceTravelledInFeet(street1, street2) <= 2000) {
        return 2.56;
    } else if(distanceTravelledInFeet(street1, street2) > 2000 && distanceTravelledInFeet(street1, street2) <= 2500) {
        return 25;
    } else {
        return "cannot travel that far";
    }
}