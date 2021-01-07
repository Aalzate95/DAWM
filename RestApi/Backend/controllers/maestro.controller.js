const db = require("../models");
const Maestro = db.maestro;
const Op = db.Sequelize.Op;

// Create and Save a new Maestro
exports.create = (req, res) => {
    // Validate request
    if (!req.body.titulo || !req.body.fecha) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const maestro = {
        titulo: req.body.titulo,
        fecha: req.body.fecha
    };

    // Save Tutorial in the database
    Maestro.create(maestro)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the maestros."
            });
        });
};

// Retrieve all Maestros from the database.
exports.findAll = (req, res) => {
  Maestro.findAll()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};

// Find a single Maestro with an id
exports.findOne = (req, res) => {
  
};

// Update a Maestro by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Maestro with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Maestros from the database.
exports.deleteAll = (req, res) => {
  
};
