var PictureQuery = require('../queries/pictureQueries');
var PaktUserQuery = require('../queries/paktUserQueries');

module.exports = {
  savePicture: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var path = req.body.data.path;

    // update picToday to be true
    PaktUserQuery.uploadedPictureToday(userId, paktId)
    .catch(function (error) {
      console.error(error);
    });
    // increment pic counter for the week
    PaktUserQuery.incrementPicsThisWeek(userId, paktId)
    .catch(function (error) {
      console.error(error);
    });
    // store picture info in db
    PictureQuery.postPicture(userId, paktId, path)
    .then(function (picture) {
      res.send(picture);
    })
    .catch(function (error) {
      console.error(error);
    });
  }
};
