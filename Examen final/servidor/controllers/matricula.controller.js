
var express = require('express');
var router = express.Router();

const Matricula = require('../models/matricula.model');

router.get('/', async (req, res, next) => {
    const mat = await Matricula.find()
    res.send(mat)
});

/* exports.index = function (req, res) {
    Matricula.get(function (err, mat) {
        
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Users retrieved successfully",
            data: mat
        });
    });
}; */

module.exports = router;