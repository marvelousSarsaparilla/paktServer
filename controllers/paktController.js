var PaktQuery = require('../queries/paktQueries');
var PaktUserQuery = require('../queries/paktUserQueries');

module.exports = {
  getAllPakts: function (req, res) {
    var userId = req.params.userId;
    PaktQuery.getPakts(userId, function (pakts) {
      res.send(pakts);
    });
  },
  postPakt: function (req, res) {
    var data = req.body.data;
    var pairs = [];
    var i;
    PaktQuery.createPakt(data.pakt, function (newPakt) {
      var paktId = newPakt.id;
      // this should include the creator of the pakt
      var users = data.users;
      for (i = 0; i < users.length; i++) {
        pairs.push({ PaktId: paktId, UserId: users[i] });
      }
      PaktUserQuery.addFriendsToPakt(pairs, function () {
        PaktQuery.setPaktEndDate(paktId)
        .then(function () {
          res.send(newPakt);
        });
      });
    });
  }
};
