"use strict";

const port = 8000;

/*
require modules
 */
const express = require("express");

/*
Create our express app object
 */
const app = express();

const quotesJSON = require("./quotes.json");

/*
Configure middlewares
 */
app.use(express.static("static"));

app.use(function(req, res, next) {
    console.log("New request: ", req.url);
    next();
});


/*
Configure application Routes - Routes Handler
 */
app.get("/data", function(req,res) {

    const randomQuoteNumber = Math.floor(Math.random() * quotesJSON.quotes.length);
    const selectedQuote = quotesJSON.quotes[randomQuoteNumber];

    const response = {
        id: randomQuoteNumber,
        ...selectedQuote
    };

    res.json(response);
});


/*
Start the server
 */
app.listen(port);
console.log("Server running on http://localhost:"+port);

