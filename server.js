const express = require("express");
const bodyParser = require("body-parser");
const path =require('path')
const cors = require("cors");

const app = express();

var corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});
app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/index.html'));
});
app.get('/collection.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/collection.html'));
});
app.get('/racingBoots.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/racingBoots.html'));
});
app.get('/shoes.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/shoes.html'));
});
app.get('/contact.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/contact.html'));
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/index.html'));
});
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});