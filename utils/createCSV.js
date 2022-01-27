const fs = require("fs");

module.exports = data => {
  fs.writeFileSync(
    "coinex-parsed.csv",
    "Date,Sent Amount,Sent Currency,Received Amount,Received Currency,Fee Amount,Fee Currency",
    "utf8",
    function (err) {
      if (err) {
        console.log("Some error occured - file either not saved or corrupted file saved.");
      } else {
        console.log("It's saved!");
      }
    }
  );

  // fs.writeFileSync("coinex-parsed.csv");

  data.forEach(transaction => {
    fs.appendFileSync("coinex-parsed.csv", `\n${transaction}`);
  });
};
