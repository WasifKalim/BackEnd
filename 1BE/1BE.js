// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    // res.end('Hello World this is rohan Das');
    res.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Pseudo selectors & more designing</title>
        <style>
            .container{
                border: 2px solid red;
                background-color: rgb(29, 195, 218);
                padding: 34px;
                margin: 34px auto;
                width: 666px;
            }
            .btn{
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                font-weight: bold;
                background-color: crimson;
                padding: 6px;
                /* button area dimension->padding */
                border: none;
                cursor: pointer;
                font-size: 13px;
                /* button size dimension */
                border-radius: 4px;
                text-decoration: none;
            }
    
            /* placed cursor on btn */
            .btn:hover{
                color: rgb(173, 173, 37);
                background-color: rgb(105, 105, 83);
                border: 2px solid rgb(14, 14, 201);
            }
            a:hover{
                color: rgb(15, 15, 15);
                background-color:rgb(29, 195, 218);
                /* hover-effect on it when curson on it */
            }
            a:visited{
                background-color: rgb(104, 15, 15);
                /* color will change after visiting the site */
            }
            a:active{
                background-color: #0ae0b2;
                /* color will change when you hold your click */
            }
        </style>
    </head>
    <body>
        <div class="container" id="cont1">
            <h3>This is my heading</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat molestiae eum reiciendis dolorum doloremque aliquid aspernatur? Nesciunt, iusto soluta! Recusandae est quas odio! Eos iure sed beatae quidem nulla veniam nisi odit at!</p>
                <a href="http://google.com" class="btn">Read more</a>
                <button class="btn">Contact us</button>
        </div>
    </body>
    </html>`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

// Crtl + C to close server
// always restart node program after changing code
// Node.js REPL
// _ is the last value
// Double tab to see modules available in node, open in terminal