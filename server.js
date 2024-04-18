//import express and then require it
const express = require("express")
//set variable to express
const app = express();
//set port variable for use in localserver:
const port = "3000";




//Start server and listen on port variable for changes
app.listen(port, (req, res) => {
    console.log(`Currently Listening on the port numbered ${port}`)
})