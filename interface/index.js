const GRPCClient = require('grpc-pool').default;
const path = require('path');
const CONFIG = require('../dist/config').default;

const PROTO_PATH = path.join(__dirname, '../proto_buff/main.proto');

const client = new GRPCClient(PROTO_PATH, {
    maxConnections : 2,
    packageName    : 'MS',
    serviceName    : 'Registry',
    // url            : `0.0.0.0:${CONFIG.server.port}`,
    url            : `192.168.1.60:${CONFIG.server.port}`,
    rpcPrefix      : 'Registry',
});

module.exports = client;
