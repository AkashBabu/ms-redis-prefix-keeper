'use strict';Object.defineProperty(exports, "__esModule", { value: true });exports.RemoveMS = exports.OverrideMS = exports.SaveMS = exports.GetMaxID = exports.GetMS = undefined;var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _promise = require('babel-runtime/core-js/promise');var _promise2 = _interopRequireDefault(_promise);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var GetMS = exports.GetMS = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(





    function _callee(query) {return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:
                        query.$or = [
                        { _del: { $exists: false } },
                        { _del: false }];return _context.abrupt('return',

                        new _promise2.default(function (resolve, reject) {
                            registryColl.find(query, function (err, microServices) {return err ? reject(err) : resolve(microServices);});
                        }));case 2:case 'end':return _context.stop();}}}, _callee, this);}));return function GetMS(_x) {return _ref.apply(this, arguments);};}();var GetMaxID = exports.GetMaxID = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee2() {return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:return _context2.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.
                            find().
                            sort({ _id: -1 }).
                            limit(1, function (err, _ref3) {var _ref4 = (0, _slicedToArray3.default)(_ref3, 1),_ref4$ = _ref4[0],result = _ref4$ === undefined ? {} : _ref4$;
                                if (err) return reject(err);
                                resolve(result.id || 0);
                            });
                        }));case 1:case 'end':return _context2.stop();}}}, _callee2, this);}));return function GetMaxID() {return _ref2.apply(this, arguments);};}();var SaveMS = exports.SaveMS = function () {var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee3(msDetails) {return _regenerator2.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:
                        msDetails._ctime = new Date();return _context3.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.insert(msDetails, function (err, result) {return err ? reject(err) : resolve(result);});
                        }));case 2:case 'end':return _context3.stop();}}}, _callee3, this);}));return function SaveMS(_x2) {return _ref5.apply(this, arguments);};}();var OverrideMS = exports.OverrideMS = function () {var _ref7 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee4(msDetails, _ref6) {var key = _ref6.key;return _regenerator2.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:
                        msDetails._utime = new Date();return _context4.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.update((0, _defineProperty3.default)({}, key, msDetails[key]), { $set: msDetails }, function (err, result) {return err ? reject(err) : resolve(result);});
                        }));case 2:case 'end':return _context4.stop();}}}, _callee4, this);}));return function OverrideMS(_x3, _x4) {return _ref7.apply(this, arguments);};}();var RemoveMS = exports.RemoveMS = function () {var _ref8 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(


    function _callee5(query) {var uObj;return _regenerator2.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:
                        uObj = {
                            _dTime: new Date(),
                            _del: true
                            // TODO: Implement Deleted By _delBy:
                        };return _context5.abrupt('return',
                        new _promise2.default(function (resolve, reject) {
                            registryColl.update(query, { $set: uObj }, function (err, result) {return err ? reject(err) : resolve(result);});
                        }));case 2:case 'end':return _context5.stop();}}}, _callee5, this);}));return function RemoveMS(_x5) {return _ref8.apply(this, arguments);};}();var _libPromisify = require('lib-promisify');var _libPromisify2 = _interopRequireDefault(_libPromisify);var _mongo = require('../db/mongo');var _mongo2 = _interopRequireDefault(_mongo);var _config = require('../config');var _config2 = _interopRequireDefault(_config);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}var registryColl = _mongo2.default.collection(_config2.default.db.mongo.coll.registry);