const db = require("../models");
const bcrypt = require('bcrypt');
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

const Users = db.users;

exports.createUser = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    let hash = bcrypt.hashSync(req.body.password, salt)

    let users = {
        email: req.body.email,
        password: hash,
        city: req.body.city,
        post: req.body.post,
        address: req.body.address,
        info: req.body.info,
        role: req.body.role
    }

    if (bcrypt.compareSync(req.body.password, hash)) {
        Users.create(users)
            .then(data => {
                res.send(data);
            }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Products."
            });
        });
    }


};

exports.getAll = (req, res) => {

    Users.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    });
};