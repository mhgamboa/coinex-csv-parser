# Coinex xslx Parser

A small app to parse Coinex .xslx files and generates a new .csv that is **formatted for [Koinly](https://koinly.io/)**.

## Running the app:

1. You must have [Nodejs](https://nodejs.org/en/) installed. I favor installing Nodejs with Node version Manager (NVM) for [windows](https://github.com/coreybutler/nvm-windows) or [mac/linux](https://github.com/nvm-sh/nvm), but you can use the [official website](https://nodejs.org/en/) as well, which is probably simpler.

1. To parse your xslx you must do the following:
   1. Export xslx from coinex
   2. Rename the exported xslx to be `coinex.xslx` (All lower case)
   3. copy `coinex.xslx` in to the root project folder (The folder titled `coinex-xslx-parser`)
   4. In terminal run the following commands:
      1. Navigate to `coinex-xslx-parser` folder (with something like `cd coinex-xslx-parser`)
      2. `npm install` -> Installs necessary dependencies
      3. `npm start` -> **Should** create a new file called `coinex-parsed.xslx`

## Other Notes

- There may be bugs, so **use at your own risk**. It worked for me, but it may not work for you - **I'm not responsible for your taxes**. This will only work for Spot Market Account transactions: currency exchanging (no short trades), deposits and withdrawals.
- When you conduct an exchange on Coinex, it appears that Coinex will breaks down your trade into multiple subtrades. It then breaks those subtrades into 3 different parts: The amount of currency sold, the amount of currency recieved, and the amount of currency in fees.
  - This project attempts to group the subtrades by date/time, and then compile all of the fees, and currencies traded into one easy to read transaction before epxorting these transactions to a CSV file
