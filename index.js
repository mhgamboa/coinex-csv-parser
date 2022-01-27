const parseExcel = require("./utils/parseExcel.js");
const parseAllTransactions = require("./utils/parseAllTransactions.js");
const createCSV = require("./utils/createCSV.js");

console.log("Now parsing Excel Sheet..");
const JSONSheet = parseExcel();

console.log("Now Organizing Transactions..");
const parsedJSONSheet = parseAllTransactions(JSONSheet);

console.log("Now Creating the CSV..");
createCSV(parsedJSONSheet);

console.log("Program is finished running");
