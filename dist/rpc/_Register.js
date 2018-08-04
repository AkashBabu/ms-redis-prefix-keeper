'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _regenerator = require('babel-runtime/regenerator');var _regenerator2 = _interopRequireDefault(_regenerator);var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);var _registry = require('../models/registry');
var _logger = require('../lib/logger');var _logger2 = _interopRequireDefault(_logger);
var _constants = require('../constants');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default = function () {var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(

    function _callee(_ref, cb) {var msDetails = _ref.request;var _ref3, _ref4, existingMS, result;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.prev = 0;_context.next = 3;return (


                            (0, _registry.GetMS)({ name: msDetails.name }));case 3:_ref3 = _context.sent;_ref4 = (0, _slicedToArray3.default)(_ref3, 1);existingMS = _ref4[0];

                        // If Not already present, then create a new entry
                        result = void 0;if (
                        existingMS) {_context.next = 18;break;}_context.next = 10;return (

                            (0, _registry.GetMaxID)());case 10:_context.t0 = _context.sent;msDetails.id = _context.t0 + 1;
                        msDetails.type = _constants.MS_TYPE[msDetails.type];_context.next = 15;return (
                            (0, _registry.SaveMS)(msDetails));case 15:result = _context.sent;_context.next = 23;break;case 18:if (!
                        msDetails._override) {_context.next = 23;break;}
                        delete msDetails.id;
                        delete msDetails._override;
                        // logger.debug('Overriding MS:', msDetails);
                        _context.next = 23;return (0, _registry.OverrideMS)(msDetails, { key: 'name' });case 23:


                        cb(null, {
                            success: true,
                            data: (existingMS || result).id,
                            message: existingMS ? 'Already Registered' : 'New MS Registered' });_context.next = 30;break;case 26:_context.prev = 26;_context.t1 = _context['catch'](0);


                        _logger2.default.error('Failed to register MS:', msDetails, 'due to:', _context.t1);
                        cb(null, {
                            success: false,
                            message: _context.t1.toString() });case 30:case 'end':return _context.stop();}}}, _callee, this, [[0, 26]]);}));function _Register(_x, _x2) {return _ref2.apply(this, arguments);}return _Register;}();