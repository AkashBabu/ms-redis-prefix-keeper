'use strict';var _grpc = require('grpc');var _grpc2 = _interopRequireDefault(_grpc);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _config = require('./config');var _config2 = _interopRequireDefault(_config);
var _Register2 = require('./rpc/_Register');var _Register3 = _interopRequireDefault(_Register2);
var _GetMS2 = require('./rpc/_GetMS');var _GetMS3 = _interopRequireDefault(_GetMS2);
var _Deregister2 = require('./rpc/_Deregister');var _Deregister3 = _interopRequireDefault(_Deregister2);
var _logger = require('./lib/logger');var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var PROTO_PATH = _path2.default.join(__dirname, '../proto_buff/main.proto');

var Registry = _grpc2.default.load(PROTO_PATH).MS.Registry;

var RegistryService = {
    _Register: _Register3.default,
    _GetMS: _GetMS3.default,
    _Deregister: _Deregister3.default };


function main() {
    var server = new _grpc2.default.Server();
    server.addService(Registry.service, RegistryService);
    _logger2.default.info('Server starting on port:', _config2.default.server.port);
    server.bind('0.0.0.0:' + (process.env.PORT || _config2.default.server.port), _grpc2.default.ServerCredentials.createInsecure());
    server.start();
}

main();