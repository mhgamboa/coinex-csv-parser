# Coinex csv Parser

A small app to parse CSV files. This software generates a new CSV that is **formatted for [Koinly](https://koinly.io/)**.

## Running the app:

1. You must have [Nodejs](https://nodejs.org/en/) installed.I personally favor installing with Node version Manager (NVM) for [windows](https://github.com/coreybutler/nvm-windows) or [mac/linux](https://github.com/nvm-sh/nvm).

1. To parse your CSV you must do the following:
   1. Export CSV from coinex
   2. Rename the exported CSV to be `coinex.csv` (All lower case)
   3. copy `coinex.csv` in to the root project folder (The folder titled `coinex-csv-parser`)
   4. In terminal run the following commands:
      1. In the terminal navigate to `coinex-csv-parser`
      2. `npm install` -> Installs necessary dependencies
      3. `npm start` -> Creates a new file called `coinex-parsed.csv`

## Other Notes

- There may be bugs, so use at your own risk. I'm not responsible for your taxes.
