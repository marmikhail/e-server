const textRoutes = require('./text_routes');
module.exports = function(app, db) {
  textRoutes(app, db);
};