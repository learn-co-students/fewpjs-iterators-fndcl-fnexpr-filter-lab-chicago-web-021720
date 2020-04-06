// Code your solution here

const findMatching = (drivers, string) => {
    return drivers.filter(x => {
        return x.toUpperCase() === string.toUpperCase();
    })
}

const fuzzyMatch = (drivers, string) => {
    return drivers.filter(x => {
        return x.charAt() === string.charAt();
    })
}

const matchName = (drivers, string) => {
    return drivers.filter(x => {
        return x.name === string;
    })
}