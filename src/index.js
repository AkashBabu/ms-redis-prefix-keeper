import grpc from 'grpc';
import path from 'path';
import CONFIG from './config';
import _Register from './rpc/_Register';
import _GetMS from './rpc/_GetMS';
import _Deregister from './rpc/_Deregister';
import logger from './lib/logger';

const PROTO_PATH = path.join(__dirname, '../proto_buff/main.proto');

const Registry = grpc.load(PROTO_PATH).MS.Registry;

const RegistryService = {
    _Register,
    _GetMS,
    _Deregister,
};

function main() {
    const server = new grpc.Server();
    server.addService(Registry.service, RegistryService);
    logger.info('New Server starting on port:', CONFIG.server.port);
    server.bind(`0.0.0.0:${process.env.PORT || CONFIG.server.port}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
