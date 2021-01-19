var express = require('express');
var router = express.Router();

const maestroController = require("../controllers/maestro.controller.js");

/* GET maestros listing. */
router.get('/', maestroController.findAll);

/* GET maestros listing with view */
router.get('/view',  maestroController.findAllView);

module.exports = router;
