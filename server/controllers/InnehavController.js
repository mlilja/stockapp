var restful = require('node-restful');

module.exports = function(app, route) {

  // Setup the controller for REST;
  var rest = restful.model(
  	'innehav',
  	app.models.innehav
  	).methods(['get', 'put', 'post', 'delete']);

  rest.register(app, route);

  // Return middleware.
  return function(req, res, next) {
  	  console.log('********' + app.models.innehav);

    next();
  };
};