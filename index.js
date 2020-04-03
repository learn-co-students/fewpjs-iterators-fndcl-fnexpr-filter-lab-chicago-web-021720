function findMatching (drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        return driver.split("").slice(0, letters.length).join("") === letters
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name)
}