'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.GetObjId = undefined;var _mongojs = require('mongojs');var _mongojs2 = _interopRequireDefault(_mongojs);
var _config = require('../config');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var db = (0, _mongojs2.default)(_config2.default.db.mongo.url);

var GetObjId = exports.GetObjId = function GetObjId(id) {return _mongojs2.default.ObjectId(id);};exports.default =

db;