'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _freeze = require('babel-runtime/core-js/object/freeze');var _freeze2 = _interopRequireDefault(_freeze);var _libEnv = require('lib-env');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

var CONFIG = (0, _freeze2.default)({
    test: {
        db: {
            mongo: {
                url: 'mongodb://localhost:27017/registry_test?maxPoolSize=2',
                coll: {
                    registry: 'registry' } } },



        server: {
            port: 50004 } },


    dev: {
        db: {
            mongo: {
                url: 'mongodb://localhost:27017/registry_dev?maxPoolSize=2',
                coll: {
                    registry: 'registry' } } },



        server: {
            port: 50001 } },


    staging: {
        db: {
            mongo: {
                url: 'mongodb://localhost:27017/registry_staging?maxPoolSize=2',
                coll: {
                    registry: 'registry' } } },



        server: {
            port: 50001 } },


    production: {
        db: {
            mongo: {
                url: 'mongodb://localhost:27017/registry?maxPoolSize=5',
                coll: {
                    registry: 'registry' } } },



        server: {
            port: 10001 } } })[



(0, _libEnv.GetENV)()];exports.default =

CONFIG;