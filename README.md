# Coinex xslx Parser

A small app to parse xslx files. This software generates a new xslx that is **formatted for [Koinly](https://koinly.io/)**.

## Running the app:

1. You must have [Nodejs](https://nodejs.org/en/) installed.I personally favor installing with Node version Manager (NVM) for [windows](https://github.com/coreybutler/nvm-windows) or [mac/linux](https://github.com/nvm-sh/nvm).

1. To parse your xslx you must do the following:
   1. Export xslx from coinex
   2. Rename the exported xslx to be `coinex.xslx` (All lower case)
   3. copy `coinex.xslx` in to the root project folder (The folder titled `coinex-xslx-parser`)
   4. In terminal run the following commands:
      1. In the terminal navigate to `coinex-xslx-parser`
      2. `npm install` -> Installs necessary dependencies
      3. `npm start` -> Creates a new file called `coinex-parsed.xslx`

## Other Notes

- There may be bugs, so use at your own risk. I'm not responsible for your taxes.
