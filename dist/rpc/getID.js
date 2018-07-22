'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _registry = require('../models/registry');
var _logger = require('../lib/logger');var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

    function _callee(_ref, cb) {var name = _ref.name;var _ref3, _ref4, ms, response;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                            (0, _registry.GetMS)({ name: name }));case 3:_ref3 = _context.sent;_ref4 = (0, _slicedToArray3.default)(_ref3, 1);ms = _ref4[0];

                        response = {};
                        if (!ms) {
                            response.success = false;
                            response.message = 'No MS found for the given name: ' + name;
                        } else {
                            response.success = true;
                            response.data = ms._id.toString();
                        }

                        cb(null, response);_context.next = 15;break;case 11:_context.prev = 11;_context.t0 = _context['catch'](0);

                        _logger2.default.error('Failed to get MS for name:', name, 'due to:', _context.t0);
                        cb(null, {
                            success: false,
                            message: _context.t0.toString() });case 15:case 'end':return _context.stop();}}}, _callee, this, [[0, 11]]);}));function GetID(_x, _x2) {return _ref2.apply(this, arguments);}return GetID;}();