var sequelize = require('./db.js').sequelize;

// REPEATING EVENT; decide if lost
var lostRepeatingPakt = function () {
  sequelize.query('UPDATE pakt_users pu ' +
  'JOIN pakts p ' +
    'ON pu.PaktId = p.id ' +
  'SET pu.win = false ',
  'WHERE p.repeating = true ' +
    'AND p.open = true ' +
    'AND pu.win = NULL ' +
    'AND ((p.frequency - pu.picsThisWeek) > ((6 - DAYOFWEEK(NOW()) + ' +
    'DAYOFWEEK(p.createdAt)) % 7))', { type: sequelize.QueryTypes.UPDATE });
};
// decide if single day pakt is lost
var lostSinglePakt = function () {
  sequelize.query(
    'UPDATE pakt_users pu ' +
    'JOIN pakts p ' +
      'ON pu.PaktId = p.id ' +
    'SET pu.win = false ' +
    'WHERE p.repeating = false ' +
      'AND p.open = true ' +
      'AND pu.win = NULL ' +
      'AND pu.picToday = false ' +
      'AND DATE(endDate) = CURDATE()', { type: sequelize.QueryTypes.UPDATE });
};
// close pakt on last day
var closePakt = function () {
  sequelize.query(
    'UPDATE pakt_users pu ' +
    'JOIN pakts p ' +
      'ON pu.PaktId = p.id ' +
    'SET p.open = false ' +
    'WHERE p.open = true ' +
      'AND DATE(endDate) = CURDATE()', { type: sequelize.QueryTypes.UPDATE });
};
// reset pic count on last day of week
var resetPicsThisWeek = function () {
  sequelize.query(
    'UPDATE pakt_users pu ' +
    'JOIN pakts p ' +
      'ON pu.PaktId = p.id ' +
    'SET pu.picsThisWeek = 0 ' +
    'WHERE p.repeating = true ' +
      'AND p.open = true ' +
      'AND pu.win = NULL ' +
      'AND DAYOFWEEK(NOW()) = DAYOFWEEK(p.createdAt)', { type: sequelize.QueryTypes.UPDATE });
};

// reset pic upload at end of day
var resetPicToday = function () {
  sequelize.query(
    'UPDATE pakt_users pu ' +
    'JOIN pakts p ' +
      'ON pu.PaktId = p.id ' +
    'SET pu.picToday = false ' +
    'WHERE p.repeating = true ' +
     'AND p.open = true', { type: sequelize.QueryTypes.UPDATE });
};

lostRepeatingPakt();
lostSinglePakt();
closePakt();
resetPicsThisWeek();
resetPicToday();

