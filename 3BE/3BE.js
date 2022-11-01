// Syncronous or blocking
// Line by line execution

// Asyncronus or non-blocking
// Line by line execution not guarenteed
//  -callbacks will be fire

// JavaScript m libraries hoti h & Node m modules add krte h

// Sync - Syncronous -> it means that program will not be be forwarded till the sync(in last program 'read') will be done

const fs = require("fs");
let text = fs.readFile("2dele.txt", "utf-8", (err,data)=>{
    console.log(error, data);
});
console.log("This is a message");

// fs.readFile is a callback function so it is running in background program moves ahead so the 'this is a message' is print first

// If the readFile is not complete then call back will not be fired