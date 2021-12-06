# Node.js console-colors

```
const consoleColors = {
  // Common
  reset: '\x1b[0m',
  dim: "\x1b[2m",
  underscore: "\x1b[4m",
  reverse: "\x1b[7m",

  // Text colors
  black: "\x1b[30m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
  white: "\x1b[37m",

  // Background colors
  BgBlack: "\x1b[40m",
  BgRed: "\x1b[41m",
  BgGreen: "\x1b[42m",
  BgYellow: "\x1b[43m",
  BgBlue: "\x1b[44m",
  BgMagenta: "\x1b[45m",
  BgCyan: "\x1b[46m",
  BgWhite: "\x1b[47m",
}
```

## Usage
You should aim to always use `reset` after each log.
<br />See `example.js` for demo.

```
console.log(`\n${consoleColors.dim} Dimmed text ${consoleColors.reset}`);
console.log(`\n${consoleColors.cyan} Cyan text ${consoleColors.reset}`);
console.log(`\n${consoleColors.black}${consoleColors.BgGreen} Black text, green background ${consoleColors.reset}`);
console.log(`\nRegular, ${consoleColors.white}${consoleColors.BgRed}red background${consoleColors.reset}, back to regular`);
console.log("\n");
```

![image](https://user-images.githubusercontent.com/4234732/144883880-2d3b48cf-1ef9-43fb-ac62-57ecc2fbdffb.png)