const fs = require("fs");
const parseExcel = require("./utils/parseExcel.js");
const parseAllTransactions = require("./utils/parseAllTransactions.js");

const JSONSheet = parseExcel();
const parsedJSONSheet = parseAllTransactions(JSONSheet);

console.log(parsedJSONSheet);
