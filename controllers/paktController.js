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
    var userId = parseInt(req.params.userId, 10);
    var pairs = [];
    var i;

    PaktQuery.createPakt(data.pakt, function (newPakt) {
      var paktId = newPakt.id;
      var users = data.pakt.users;

      // add creator of the pakt and mark as accepted
      pairs.push({ PaktId: paktId, UserId: userId, accepted: true });

      for (i = 0; i < users.length; i++) {
        pairs.push({ PaktId: paktId, UserId: users[i] });
      }
      PaktUserQuery.addFriendsToPakt(pairs, function () {
        res.send(newPakt);
      });
    });
  }
};
