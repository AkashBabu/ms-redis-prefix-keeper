"use strict";Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require("babel-runtime/regenerator");var _regenerator2 = _interopRequireDefault(_regenerator);var _slicedToArray2 = require("babel-runtime/helpers/slicedToArray");var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _registry = require("../models/registry");
var _logger = require("../lib/logger");var _logger2 = _interopRequireDefault(_logger);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

    function _callee(msDetails, cb) {var _ref2, _ref3, existingMS, result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (


                            (0, _registry.GetMS)({ name: msDetails.name }));case 3:_ref2 = _context.sent;_ref3 = (0, _slicedToArray3.default)(_ref2, 1);existingMS = _ref3[0];

                        // If Not already present, then create a new entry
                        result = void 0;if (
                        existingMS) {_context.next = 11;break;}_context.next = 10;return (0, _registry.SaveMS)(msDetails);case 10:result = _context.sent;case 11:

                        cb(null, {
                            success: true,
                            data: (existingMS || result)._id,
                            message: existingMS ? 'Already Registered' : 'New MS Registered' });_context.next = 18;break;case 14:_context.prev = 14;_context.t0 = _context["catch"](0);



                        _logger2.default.error('Failed to register MS:', msDetails, 'due to:', _context.t0);
                        cb(null, {
                            success: false,
                            message: _context.t0.toString() });case 18:case "end":return _context.stop();}}}, _callee, this, [[0, 14]]);}));function Register(_x, _x2) {return _ref.apply(this, arguments);}return Register;}();