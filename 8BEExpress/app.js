// It mainly handles routing
// It is basic setup routes

// npm init: for the package .json 
// npm install express: for the node_modules

const express = require("express")
//  Express module ko import kiya

// for demo it should not be commented 
let path = require("path");

// const fs = require("fs");

 const app = express();
// initialized express in app
 const port = 80;
// serving on port 80

// serving static files
app.use('/static', express.static('static'));

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')); // serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF

// Set the template engine as pug
app.set('view engine', 'pug');



 // Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Our pug demo endpoint
app.get("/demo", (req, res)=>{
    res.status(200).render('demo', {title: 'Hey Wasif', message: 'Hello there and thanks for telling me how to use pubG!'})
});

// ENDPOINTS 11BE
app.get('/', (req, res)=>{
    const con  = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'Pubg is the best game', "content": con}
    res.status(200).render('index.pug', params);
    res.send("This is homepage of my firest express appp with Harry")
});

app.get("/about", (req, res)=>{
    res.send("This is about page of my first express app with Harry")
});



app.post('/', (req, res) =>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of the client is ${name}, ${age} year old, ${address}, resident at ${address}, More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite) // takes path and then data
    const params = {"message": 'Your form has been sumbitted successfull'}
    res.status(200).render('index.pug', params);

})


//  app.get("/", (req, res)=>{
//      res.status(200).send("This is homepage of my first express app with Harry");
//  });
 
//  app.get("/about", (req, res)=>{
//      res.send("This is about page of my first express app with Harry");
//  });
//  //  This is GET request in postman and status 200

//  app.post("/about", (req, res)=>{
//      res.send("This is a post request about page of my first express app with Harry");
//  });
//  //  This is ABOUT request in postman
 
// //  app.get("/about", (req, res)=>{
// //      res.status(200).send("This is about page of my first express app with Harry");
// //  });
// //  It gives the status of the site


//  app.get("/this", (req, res)=>{
//      res.status(404).send("This page is not found");
//  });

 app.listen(port, ()=>{
     console.log(`The application started successfully on port ${port}`);
 })
//  Mera app kissi port p listen karega tabhi na chalega