module.exports = function (sequelize, DataTypes) {
  return sequelize.define('Pakt_User', {
    accepted: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    win: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    delete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    picToday: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    picsThisWeek: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    }
  });
};
