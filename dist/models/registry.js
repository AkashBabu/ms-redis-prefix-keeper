'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.SaveMS = exports.GetMaxID = exports.GetMS = undefined;var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var GetMS = exports.GetMS = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(





    function _callee(query) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:return _context.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.find(query, function (err, microServices) {
                                if (err) {
                                    _logger2.default.error('Failed to Get existing MS for query:', query);
                                    return reject(err);
                                }
                                resolve(microServices);
                            });
                        }));case 1:case 'end':return _context.stop();}}}, _callee, this);}));return function GetMS(_x) {return _ref.apply(this, arguments);};}();var GetMaxID = exports.GetMaxID = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.
                            find().
                            sort({ _id: -1 }).
                            limit(1, function (err, _ref3) {var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),_ref4$ = _ref4[0],result = _ref4$ === undefined ? {} : _ref4$;
                                if (err) {
                                    return reject(err);
                                }
                                resolve(result.id || 0);
                            });
                        }));case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));return function GetMaxID() {return _ref2.apply(this, arguments);};}();var SaveMS = exports.SaveMS = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee3(msDetails) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            msDetails._ctime = new Date();
                            registryColl.insert(msDetails, function (err1, result1) {
                                if (err1) {
                                    _logger2.default.error('Failed to save new msDetails');
                                    return reject(err1);
                                }
                                resolve(result1);
                            });
                        }));case 1:case 'end':return _context3.stop();}}}, _callee3, this);}));return function SaveMS(_x2) {return _ref5.apply(this, arguments);};}();var _mongo = require('../db/mongo');var _mongo2 = _interopRequireDefault(_mongo);var _config = require('../config');var _config2 = _interopRequireDefault(_config);var _logger = require('../lib/logger');var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var registryColl = _mongo2.default.collection(_config2.default.db.mongo.coll.registry);