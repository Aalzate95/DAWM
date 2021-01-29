let router = require('express').Router();


//import controllers
var matriculaController = require('../controllers/matricula.controller');

router.route('/').get(matriculaController)

//routes
/* router.get('/matriculas',matriculaController.index) */
/* router.get('/matriculas',function(req, res){
    res.send('hola')
}) */

module.exports = router;
