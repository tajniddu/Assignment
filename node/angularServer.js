const express = require('express')
const fs = require("fs");
const path=require("path")
const serveStatic=require("serve-static");
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.use(express.static('public/en'));
//app.use(express.static('public/ed'));
app.use(serveStatic(path.join(__dirname, 'public/en')));


app.get('/en', function (req, res) {
        res.sendFile(path.join(__dirname, 'public/en/index.html'));
});

app.use(serveStatic(path.join(__dirname, 'public/ed')));
app.get('/ed', function (req, res) {
        res.sendFile(path.join(__dirname, 'public/ed/index.html'));
});

app.listen(3000)