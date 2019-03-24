# betterConsole
A NodeJs Plugin For Pretty Console Logging by Ryan Wans

## Installation
- Clone the repo and copy the file into your current site directory with NodeJS
- In your ```app.js``` or main node file, include the following line to configure the file as a working plugin:
```
const log = require("./betterConsole.js");
```
- Thats it! You're all ready to use this powerful yet simple plugin. Documentation below



## Documentation
As of version 0.1.0\n
Assuming ```log``` is your variable assigned to the plugin (as above)

```log.warn(message)``` - Logs a warning flag into your console with a custom message defined when calling the function.

```log.info(message)``` - Logs information into your console with a custom message defined when calling the function.

```log.startup(port)``` - Signifies that the server is now listening on a specific port to the console.

```log.server(message)``` - Logs a message defined when calling the function with a SERVER tag signifying an action from the server.

```log.error(message)``` - Logs an error into your console with a custom error message defined when calling the function.

```log.replace(message)``` - This logs a message to the console with the INFO tag but replaces the previous line everytime its called. Good for logging the ammount of traffic without creating hundreds of lines.

