const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-Parser');

let app = express();

alert('WOW!');

app.use("/", (req, res, next) => {
    console.log("I am a middleaware");
    next();
  });  

  app.use(bodyParser.urlencoded({ extended: false }));

  app.post('contact-form', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.name);
    res.send('Thank you!');
  });

app.use((req,res,next) => {
    console.log(req.originalUrl);
    next();
});
