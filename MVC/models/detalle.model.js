module.exports = (sequelize, DataTypes) => {
  const Detalle = sequelize.define("detalle", {
    item: {
      type: DataTypes.INTEGER
    },
    nombre: {
      type: DataTypes.STRING
    },
    valor: {
      type: DataTypes.FLOAT
    }
  });

  return Detalle;
};