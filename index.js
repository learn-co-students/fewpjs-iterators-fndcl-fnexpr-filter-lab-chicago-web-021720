// Code your solution here
function findMatching(drivers, str) {
    const matches = drivers.filter(s => {
        return s.toLowerCase() === str.toLowerCase()
    });
    return matches;
}

function fuzzyMatch(drivers, str) {
    const matches = drivers.filter(s => {
        return s.toLowerCase().charAt(0) === str.toLowerCase().charAt(0);
    });
    return matches;
}

function matchName(drivers, str) {
    const matches = drivers.filter(s => {
        return s['name'] === str;
    });
    return matches;
}