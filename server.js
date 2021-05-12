const express = require("express");
const bodyParser = require("body-parser");
const usersRouter  = require("./routes/index");


const path = require('path');
const cors = require("cors");

const app = express();

var corsOptions = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}

app.use(cors(corsOptions));
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use("/api/v1", usersRouter);
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
app.get('/api', function(req, res) {
    res.json({a:2});
});

app.post('/users',(req,res)=>{
    console.log(req.body)
})


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/view/index.html'));
});
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});