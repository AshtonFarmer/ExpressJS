const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-Parser');

let app = express();

app.get('/', (req, res, next) => {
    res.send("Hello from the other web server side..."),
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/css/styles.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'));
})

app.use(express.static(path.join(__dirname, '../public')));

app.get('/order/:id',(req, res) => {
    let id = req.params.id;
    res.send(id);
});


app.get('/js/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/styles.css'));
});

app.listen(3000);


