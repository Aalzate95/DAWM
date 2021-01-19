var express = require('express');
var router = express.Router();

const maestroController = require("../controllers/maestro.controller.js");

router.get('/', maestroController.findAll);
router.post('/save',  maestroController.create);
router.get('/find', maestroController.findOne)
router.put('/update',  maestroController.update);
router.delete('/delete',maestroController.delete)
router.delete('/deleteAll',maestroController.deleteAll)
module.exports = router;
