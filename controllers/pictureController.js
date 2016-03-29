var PictureQuery = require('../queries/pictureQueries');
var PaktUserQuery = require('../queries/paktUserQueries');

module.exports = {
  savePicture: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var path = req.body.data.path;

    // update picToday to be true
    PaktUserQuery.uploadedPictureToday(userId, paktId)
    .then(function () {
      // increment pic counter for the week
      return PaktUserQuery.incrementPicsThisWeek(userId, paktId);
    })
    .then(function () {
      // Check if pakt is repeating
      return PaktUserQuery.checkIfPaktRepeating(paktId);
    })
    .then(function (isRepeating) {
      // If event is repeating
      if (isRepeating) {
        return PaktUserQuery.winRepeatingEvent(userId, paktId);
      }
      // Else single event
      return PaktUserQuery.winSingleEvent(userId, paktId);
    })
    .then(function () {
      // Store picture info in db
      return PictureQuery.postPicture(userId, paktId, path);
    })
    .then(function (picture) {
      res.send(picture);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
};
