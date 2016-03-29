module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Pakt', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    isMonetary: DataTypes.BOOLEAN,
    consequenceText: DataTypes.STRING,
    consequenceValue: DataTypes.INTEGER,
    repeating: DataTypes.BOOLEAN,
    frequency: DataTypes.INTEGER,
    timeFrame: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    settled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    open: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  });
};
