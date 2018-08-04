'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _defineProperty2 = require('babel-runtime/helpers/defineProperty');var _defineProperty3 = _interopRequireDefault(_defineProperty2);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _only = require('only');var _only2 = _interopRequireDefault(_only);
var _logger = require('../lib/logger');var _logger2 = _interopRequireDefault(_logger);
var _registry = require('../models/registry');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

    function _callee(_ref, cb) {var request = _ref.request;var _ref3, _ref4, msDetails;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (

                            (0, _registry.GetMS)((0, _defineProperty3.default)({}, request.idType, request[request.idType])));case 3:_ref3 = _context.sent;_ref4 = (0, _slicedToArray3.default)(_ref3, 1);msDetails = _ref4[0];
                        cb(null, {
                            success: !!msDetails,
                            msDetails: (0, _only2.default)(msDetails, 'id name type dependents dependencies version maintainers'),
                            message: !msDetails ? 'Requested MS Not Found' : '' });_context.next = 13;break;case 9:_context.prev = 9;_context.t0 = _context['catch'](0);


                        _logger2.default.error('Failed to getMS:', request, 'due to:', _context.t0);
                        cb(null, {
                            success: false,
                            message: _context.t0.toString() });case 13:case 'end':return _context.stop();}}}, _callee, this, [[0, 9]]);}));function _GetMS(_x, _x2) {return _ref2.apply(this, arguments);}return _GetMS;}();