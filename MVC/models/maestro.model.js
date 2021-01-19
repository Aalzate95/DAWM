module.exports = (sequelize, DataTypes) => {
  const Maestro = sequelize.define("maestro", {
    titulo: {
      type: DataTypes.STRING
    },
    fecha: {
      type: DataTypes.DATE
    }
  });

  return Maestro;
};