var SCSocket = require('./lib/scsocket');
var SCSocketCreator = require('./lib/scsocketcreator');

module.exports.SCSocketCreator = SCSocketCreator;
module.exports.SCSocket = SCSocket;

module.exports.Emitter = require('component-emitter');

module.exports.create = function (options) {
  return SCSocketCreator.create(options);
};

module.exports.connect = module.exports.create;

module.exports.destroy = function (socket) {
  return SCSocketCreator.destroy(socket);
};

module.exports.clients = SCSocketCreator.clients;

module.exports.version = '12.0.0';
