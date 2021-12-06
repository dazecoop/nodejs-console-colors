# Node.js console-colors

```
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
```

## Usage
You should aim to always use `reset` after each log.
<br />See `example.js` for demo.

| Code | Output |
| -- | -- |
| ```console.log(`\n${dim} Dimmed text ${reset}`);``` | <img height="50" src="https://user-images.githubusercontent.com/4234732/144881601-e2c0c2fe-8912-4b44-b2be-ce3eba9fd5e1.png" />
| ```console.log(`\n${cyan} Cyan text ${reset}`);``` | <img height="50" src="https://user-images.githubusercontent.com/4234732/144881620-cf4a5943-5ec0-46ba-93e1-7c9efa511ac3.png" /> |
| ```console.log(`\n${black}${BgGreen} Black text, green background ${reset}`)``` | <img height="50" src="https://user-images.githubusercontent.com/4234732/144881669-1f0cb715-97e9-43b9-9058-44e211b7a862.png" /> |
| ```console.log(`\nRegular text, then ${white}${BgRed}red background${reset}, and back to regular`);``` | <img height="50" src="https://user-images.githubusercontent.com/4234732/144881694-915a9cf3-7e62-4412-91e0-5917c9528a90.png" /> |
