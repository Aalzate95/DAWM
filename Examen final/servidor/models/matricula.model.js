var mongoose = require('mongoose');

const MatriculaSchema = new mongoose.Schema({
    distrito: {
        type: String
    },
    regimen: {
        type: Date,
    },
    provincia: {
        type: String
    },
    codigo: {
        type: Object,
    },
    institucion: {
        type: String,
    },
    bajo: {
        type: Object,
    },
    x36meses: {
        type: Object,
    },
    x36: {
        type: Object,
    },
    inicial: {
        type: Object,
    },
    basico: {
        type: Object,
    },
    basicosup: {
        type: Object,
    },
    bach: {
        type: Object,
    },
});

var Matricula = module.exports = mongoose.model('final', MatriculaSchema,'final');

module.exports.get = function (callback, limit) {
    Matricula.find(callback).limit(limit);
}