const XLSX = require("xlsx");

module.exports = () => {
  const workbook = XLSX.readFile("coinex.xlsx");
  const JSONsheet = XLSX.utils.sheet_to_json(workbook.Sheets.Sheet);

  const allTransactions = [];
  let currentTrans = {};
  const resetcurrentTrans = () => {
    currentTrans = {
      date: "",
      sentAmount: 0,
      sentCurrency: "",
      receivedAmount: 0,
      receivedcurrency: "",
      feeAmount: 0,
      Feecurrency: "",
    };
  };
  resetcurrentTrans();

  const parseTransaction = (item, index) => {
    let { Time, Operation, Coin, "Asset change": AssetChangehange } = item;
    if (currentTrans.date !== Time && index !== 0) {
      allTransactions.push(currentTrans);
      resetcurrentTrans();
    }
    if (Operation === "Deposit" || Operation === "Withdrawal") {
      Operation === "Withdrawal"
        ? (currentTrans.sentCurrency = Coin)
        : (currentTrans.receivedCurrency = Coin);
      allTransactions.push(currentTrans);
    }
  };

  JSONsheet.forEach(parseTransaction);

  console.log(allTransactions);
};
