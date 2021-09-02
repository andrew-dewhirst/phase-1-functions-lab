function distanceFromHqInBlocks(blockDistance) {
    return Math.abs(blockDistance - 42)
}

function distanceFromHqInFeet(feetDistance) {
    return (Math.abs(feetDistance - 42)*264)
}

function distanceTravelledInFeet(start,end) {
    return (Math.abs(end - start)*264)
}

function calculatesFarePrice(beginning, destination) {
    const distance = distanceTravelledInFeet(beginning, destination)
    switch (true) {
        case distance <400:
            return 0;
            break;
        case (400 < distance && distance < 2000) :
            return parseFloat(((distance*.02)-8).toFixed(2));
            break;
        case (2000 < distance && distance < 2500) :
            return 25 ;
            break;
        case distance > 2500 :
            return 'cannot travel that far';
    }
}