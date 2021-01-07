var express = require('express');
var router = express.Router();

const maestroController = require("../controllers/maestro.controller.js");

router.get('/', maestroController.findAll);
router.post('/save',  maestroController.create);

module.exports = router;
