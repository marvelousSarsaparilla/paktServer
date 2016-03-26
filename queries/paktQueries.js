var UserPakts = require('../utils/db.js').Pakt_User;
var User = require('../utils/db.js').User;
var Pakt = require('../utils/db.js').Pakt;
var Picture = require('../utils/db.js').Picture;
var sequelize = require('../utils/db.js').sequelize;
module.exports = {
  setPaktEndDate: function (paktId) {
    var q = 'UPDATE Pakts SET endDate = DATE_ADD(createdAt, INTERVAL timeFrame WEEK) WHERE id = ';
    return sequelize.query(q + paktId);
  },
  getPakts: function (userId, callback) {
    Pakt.findAll({
      include: [{
        model: User,
        where: { id: userId }
      },
      {
        model: Picture
      },
      {
        model: UserPakts
      }]
    })
    .then(function (pakts) {
      callback(pakts);
    });
  },
  createPakt: function (pakt, callback) {
    Pakt.create(pakt)
    .then(function (newPakt) {
      callback(newPakt);
    });
  },
  updatePakt: function (paktId, updateObj, callback) {
    Pakt.findOne({
      where: { id: paktId }
    }).then(function (pakt) {
      pakt.updateAttributes(
        updateObj
      ).then(function (updated) {
        callback(updated);
      }, function (error) {
        console.error('error updating UserPakt: ', error);
      });
    }, function (error) {
      console.error('error getting UserPakt: ', error);
    });
  }
};
