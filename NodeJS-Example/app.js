// Built-in class
const os = require('os');

// local class logger.js
const Logger = require('./logger');
const logger = new Logger();

// Listener
logger.on("messageLogged", (arg) => {
    console.log("Listener called ", arg);
});

logger.log("Welcome to module Creation");


const fs = require('fs');

var totalMemory = os.totalmem;
var freeMemory = os.freemem;

// ECMA 2015 - Template 
console.log(`Total Memory ${totalMemory}`);
console.log(`Free Memory ${freeMemory}`);

// file sync
const files = fs.readdirSync('./');

console.log("Sync Files ", files);

// file Assync - Always use async. So, multiple server can call the same request. 
// Call back will get call once the action done
fs.readdir("./", function(err, files) {
    if (err) console.log("Error ", err);
    else
        console.log("Assync Result ", files);
});