'use strict';var _grpc = require('grpc');var _grpc2 = _interopRequireDefault(_grpc);
var _path = require('path');var _path2 = _interopRequireDefault(_path);
var _config = require('./config');var _config2 = _interopRequireDefault(_config);
var _getID = require('./rpc/getID');var _getID2 = _interopRequireDefault(_getID);
var _getName = require('./rpc/getName');var _getName2 = _interopRequireDefault(_getName);
var _register = require('./rpc/register');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var PROTO_PATH = _path2.default.join(__dirname, '../proto_buff/main.proto');

var Registry = _grpc2.default.load(PROTO_PATH).MS.Registry;

var RegistryService = {
    _Register: _register.Register,
    _GetID: _getID2.default,
    _GetName: _getName2.default };


function main() {
    var server = new _grpc2.default.Server();
    server.addService(Registry.service, RegistryService);
    server.bind('0.0.0.0:' + _config2.default.server.port, _grpc2.default.ServerCredentials.createInsecure());
    server.start();
}

main();