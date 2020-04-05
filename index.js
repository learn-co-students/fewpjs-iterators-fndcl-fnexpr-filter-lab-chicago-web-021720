// Code your solution here
const findMatching = (drivers, str) => drivers.filter(driver => driver.toLowerCase() === str.toLowerCase());
const fuzzyMatch = (drivers, str) => drivers.filter(driver => driver.startsWith(str));
const matchName = (drivers, str) => drivers.filter(driver => driver.name === str);
