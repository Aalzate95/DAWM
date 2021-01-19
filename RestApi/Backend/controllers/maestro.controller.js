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
  Maestro.findOne({'attributes.id':req.params.id})
    .then(data => {
      if(!data) {
        return res.status(404).send({
            message: "Maestro no encontrado con ese ID " 
        });
      }
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving maestros."
      });
    });
};

// Update a Maestro by the id in the request
exports.update = (req, res) => {
  let id = req.body.id;
  let titulo = req.body.titulo;
  let fecha = req.body.fecha;
  
    // validation
    if (!id || !titulo || !fecha) {
        return res.status(400).send({ error: titulo, message: 'Por favor inserte un id valido' });
    }
    db.query("UPDATE maestros SET titulo = ?, fecha = ? WHERE id = ?", [titulo, fecha, id], function (error, results, fields) {
        if (error) throw error;

        // check data updated or not
        let message = "";
        if (results.changedRows === 0)
            message = "Maestro not found or data are same";
        else
            message = "Maestro successfully updated";

        return res.send({ error: false, data: results, message: message });
    });
  
}

// Delete a Maestro with the specified id in the request
exports.delete = (req, res) => {
  let id = req.body.id;
  
    if (!id) {
        return res.status(400).send({ error: true, message: 'Please provide maestro id' });
    }
    dbConn.query('DELETE FROM maestros WHERE id = ?', [id], function (error, results, fields) {
        if (error) throw error;

        // check data updated or not
        let message = "";
        if (results.affectedRows === 0)
            message = "Maestro not found";
        else
            message = "Maestro successfully deleted";

        return res.send({ error: false, data: results, message: message });
    });
};

// Delete all Maestros from the database.
exports.deleteAll = (req, res) => {
  
};
