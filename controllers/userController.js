var UserQuery = require('../queries/userQueries');

module.exports = {

  login: function (req, res) {
    var profile = req.body;
    UserQuery.findOrCreateUser(profile)
    .then(function (user) {
      return UserQuery.addFriends(profile, user);
    })
    .then(function (logedinUser) {
      res.send(logedinUser[0]);
    })
    .catch(function (error) {
      console.error(error);
    });
  },

  getUserFriends: function (req, res) {
    var userId = req.params.userId;
    UserQuery.getFriends(userId, function (friends) {
      res.send(friends);
    });
  }
};
