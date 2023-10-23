const lodash = require("lodash");

// Math module
const add = (number1, number2) => {
	return number1 + number2;
};

const substract = (number1, number2) => {
	return number1 - number2;
};

const demoAsync = async () => {
	return await Promise.resolve("OK - promesa resuelta");
};

// using a third-party module called lodash
const combineArrayWithASymbol = (items, symbol = "-") => {
	return lodash.join(items, symbol);
};

module.exports = { add, substract, demoAsync, combineArrayWithASymbol };
