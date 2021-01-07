const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.maestro = require("./maestro.model.js")(sequelize, Sequelize);
db.detalle = require("./detalle.model.js")(sequelize, Sequelize);

db.maestro.hasMany(db.detalle, { as: "detalles" });
db.detalle.belongsTo(db.maestro, {
  foreignKey: "maestroId",
  as: "maestro",
});

module.exports = db;