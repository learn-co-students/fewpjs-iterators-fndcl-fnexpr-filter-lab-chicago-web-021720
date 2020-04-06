// Code your solution here
function findMatching(drivers, str) {
    str = str.toLowerCase();
    return drivers.filter(driv => driv.toLowerCase() === str);
}

function fuzzyMatch(drivers, str) {
    str = "^" + str.toLowerCase();
    return drivers.filter(driv => driv.toLowerCase().match(RegExp(str)));
}

function matchName(drivers, str) {
    return drivers.filter(driv => driv.name === str);
}