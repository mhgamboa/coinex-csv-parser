const XLSX = require("xlsx");

module.exports = () => {
  const workbook = XLSX.readFile("coinex.xlsx");
  const JSONsheet = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet);
  return JSONsheet;
};
