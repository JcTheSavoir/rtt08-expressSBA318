//import express and then require it
const express = require("express")
//set variable to express
const app = express();
//set port variable for use in localserver:
const port = "3000";

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ extended: true }))


//--------------{middleware}-----------------
    //-----------------{error handling Middleware}------------------

    //--------------------------------------{Other Middleware}----------
app.use((req, res, next) => {
    //each time a request is made via the server, a new time will be given
    const time = new Date();
    //we then console.log that date while converting it to locale time
    console.log(
        //.toLocaleTimeString method converts a time to a string and then to a given locations time,
        //or the current location if no locale is specified)

        //req.method will give the type of request made (GET, PATCH, etc)
        //req.url will give the path/route that the server was accessed from for that request.
      `-----
  ${time.toLocaleTimeString()}: Received a ${req.method} request to ${req.url}.`
    );
    //This "if" statement should only fire off when someone tries to submit data to the api; 
    //examples would be during a PUT,PATCH,POST request (delete as well, but only if the api is setup to give data to 
    // the body when a delete request is made).  
    //This will print the time that the request was made, where it was made to, and the data in the request
    if (Object.keys(req.body).length > 0) {
      console.log("Containing the data:");
      console.log(`${JSON.stringify(req.body)}`);
    }
    next();
});

// add route for forceOfWill database
const forceOfWillRoute = require("./routes/forceOfWill");
app.use('/api/fowcards', forceOfWillRoute)

// add route for slayTheSpire database
const slayTheSpireRoute = require("./routes/slayTheSpire");
app.use('/api/stscards', slayTheSpireRoute)

// add route for yugioh database
const yugiohRoute = require("./routes/yugioh");
app.use('/api/yugiohcards', yugiohRoute)

//Start server and listen on port variable for changes
app.listen(port, (req, res) => {
    console.log(`Currently Listening on the port numbered ${port}`)
})