module.exports = JSONsheet => {
  const allTransactions = [];
  let currentTrans = {};
  const resetcurrentTrans = () => {
    currentTrans = {
      date: "",
      sentAmount: 0,
      sentCurrency: "",
      receivedAmount: 0,
      receivedCurrency: "",
      feeAmount: 0,
      feeCurrency: "",
      lastCalculated: "",
    };
  };
  resetcurrentTrans();

  const insertTrans = () => {
    allTransactions.push(
      `${currentTrans.date},${currentTrans.sentAmount},${currentTrans.sentCurrency},${currentTrans.receivedAmount},${currentTrans.receivedCurrency},${currentTrans.feeAmount},${currentTrans.feeCurrency}`
    );
  };

  JSONsheet.forEach((item, index) => {
    let { Time, Operation, Coin, "Asset change": AssetChange } = item;
    if (currentTrans.date !== Time && index !== 0) {
      insertTrans();
      resetcurrentTrans();
    }
    currentTrans.date === "" && (currentTrans.date = Time);

    Operation === "Deposit" &&
      (currentTrans.receivedCurrency = Coin) &&
      (currentTrans.receivedAmount = parseFloat(AssetChange));

    Operation === "Withdrawal" &&
      (currentTrans.sentCurrency = Coin) &&
      (currentTrans.sentAmount = parseFloat(AssetChange));

    if (Operation === "Transaction") {
      (currentTrans.lastCalculated === "" || currentTrans.lastCalculated === "sell") &&
        (currentTrans.feeCurrency = Coin) &&
        (currentTrans.feeAmount = parseFloat(AssetChange)) &&
        (currentTrans.lastCalculated = "fee");

      currentTrans.lastCalculated === "fee" &&
        (currentTrans.receivedCurrency = Coin) &&
        (currentTrans.receivedAmount = parseFloat(AssetChange)) &&
        (currentTrans.lastCalculated = "buy");

      currentTrans.lastCalculated === "buy" &&
        (currentTrans.sentCurrency = Coin) &&
        (currentTrans.sentAmount = parseFloat(AssetChange)) &&
        (currentTrans.lastCalculated = "sell");
    }

    index === JSONsheet.length - 1 && insertTrans();
  });

  return allTransactions;
};
