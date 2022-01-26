const fs = require("fs");
const XLSX = require("xlsx");

const workbook = XLSX.readFile("coinex.xlsx");
const JSONsheet = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet);

console.log(JSONsheet);
