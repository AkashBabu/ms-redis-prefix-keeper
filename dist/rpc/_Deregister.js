'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _logger = require('../lib/logger');var _logger2 = _interopRequireDefault(_logger);
var _registry = require('../models/registry');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

    function _callee(_ref, cb) {var request = _ref.request;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                            (0, _registry.RemoveMS)((0, _defineProperty3.default)({}, request.idType, request[request.idType])));case 3:
                        cb(null, {
                            success: true,
                            data: 'MS has been Successfully De-registered' });_context.next = 10;break;case 6:_context.prev = 6;_context.t0 = _context['catch'](0);


                        _logger2.default.error('Failed to deregister MS:', request, 'due to:', _context.t0);
                        cb(null, {
                            success: false,
                            message: _context.t0.toString() });case 10:case 'end':return _context.stop();}}}, _callee, this, [[0, 6]]);}));function _Deregister(_x, _x2) {return _ref2.apply(this, arguments);}return _Deregister;}();