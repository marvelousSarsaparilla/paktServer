var PictureQuery = require('../queries/pictureQueries');
var PaktUserQuery = require('../queries/paktUserQueries');

module.exports = {
  savePicture: function (req, res) {
    var userId = req.params.userId;
    var paktId = req.params.paktId;
    var path = req.body.data.path;

    // update picToday to be true and store picture info in db
    PaktUserQuery.uploadedPictureToday(userId, paktId)
    .then(function () {
      PictureQuery.postPicture(userId, paktId, path)
      .then(function (picture) {
        res.send(picture);
      })
      .catch(function (error) {
        console.error(error);
      });
    })
    .catch(function (error) {
      console.error(error);
    });
  }
};
