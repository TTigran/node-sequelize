const db = require("../models");
const Products = db.tutorials;
const Op = db.Sequelize.Op;

exports.createProduct = (req, res) => {


    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    Products.create(tutorial)
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while creating the Products."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Products.findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Products with id=" + id
            });
        });
};


exports.delete = (req, res) => {
    const id = req.params.id;

    Products.destroy({
        where: {id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Products was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Could not delete Products with id=" + id
        });
    });
};

exports.findAllPublished = (req, res) => {
    Products.findAll({where: {published: true}})
        .then(data => {
            res.send(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving tutorials."
        });
    });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Products.update(req.body, {
        where: {id: id}
    }).then(num => {
        if (num == 1) {
            res.send({
                message: "Products was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    }).catch(err => {
        res.status(500).send({
            message: "Error updating Products with id=" + id
        });
    });
};