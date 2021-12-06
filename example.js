/**
 * Run `node example.js` to test this file
 */

// Common
const reset = "\x1b[0m"
const dim = "\x1b[2m"
const underscore = "\x1b[4m"
const reverse = "\x1b[7m"

// Text colors
const black = "\x1b[30m"
const red = "\x1b[31m"
const green = "\x1b[32m"
const yellow = "\x1b[33m"
const blue = "\x1b[34m"
const magenta = "\x1b[35m"
const cyan = "\x1b[36m"
const white = "\x1b[37m"

// Background colors
const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

// Some examples
console.log(`\n${dim} Dimmed text ${reset}`);
console.log(`\n${cyan} Cyan text ${reset}`);
console.log(`\n${black}${BgGreen} Black text, green background ${reset}`);
console.log(`\nRegular text, then ${white}${BgRed}red background${reset}, and back to regular`);
console.log("\n");