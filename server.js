//import express and then require it
const express = require("express")
//set variable to express
const app = express();
//set port variable for use in localserver:
const port = "3000";

//--------------{body-parser middleware}-----------------
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));


//-----------------{view template engine (using React)}
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine())

    //------------------{express.static middleware}------------------
      //Sets the public directory to be the root directory, gives static files to use 
      //inside of express (We are using it mainly for it's ability to add css into our view section
    app.use(express.static('public'));

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

//------------------------------------------{ROUTES}-------------------
    //-------{REQUIRE FOR ROUTES}-----------------
const forceOfWillRoute = require("./routes/forceOfWill");
const slayTheSpireRoute = require("./routes/slayTheSpire");
const yugiohRoute = require("./routes/yugioh");
const homepageRoute = require('./routes/homepage')
    //--------------------------------------{routes}-----------------
//---{HOMEPAGE}
app.use('/homepage', homepageRoute);    
//---{FORCEOFWILL}
app.use('/fowcards', forceOfWillRoute);
//---{SLAYTHESPIRE}
app.use('/stscards', slayTheSpireRoute);
//---{YUGIOH}
app.use('/yugiohcards', yugiohRoute);

//-----------------{error handling Middleware}------------------
app.use((req, res, next) => {
  const err = new Error('Not a valid url, please refer to api and documentation');
  err.status = 404;
  next(err);
});
app.use((err, req, res, next) => {
  const errorStatus = err.status;
  const errorMessage = errorStatus === 404 ? "Invalid URL" : 'Resource error'

  if (req.path.startsWith('/api/')) {
    //all api issues
    res.status(errorStatus).json({
      status: errorStatus,
      //err.message refers to the "Message" inside of { const err = new Error('Not a valid url, please refer to api and documentation') }
      message: err.message || errorMessage
    });
  } else {
    // All non api issues
    res.status(errorStatus).send(errorMessage)
  }
})


//Start server and listen on port variable for changes
app.listen(port, (req, res) => {
    console.log(`Currently Listening on the port numbered ${port}`)
})