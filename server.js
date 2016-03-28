var express = require('express');
var app = express();
var db = require('./utils/db.js');
var http = require('http');
require('./utils/cronJob');

require('./utils/middleware.js')(app);
require('./utils/routes.js')(app);

app.set('port', process.env.PORT || 3000);

db.sequelize.sync().then(function () {
  http.createServer(app).listen(app.get('port'), function () {
    console.log('Hello from the other side (Port ' + app.get('port') + ')');
  });
});
module.exports = app;
