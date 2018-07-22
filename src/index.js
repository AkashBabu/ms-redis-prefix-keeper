import grpc from 'grpc';
import path from 'path';
import CONFIG from './config';
import GetID from './rpc/getID';
import GetName from './rpc/getName';
import Register from './rpc/register';

const PROTO_PATH = path.join(__dirname, '../proto_buff/main.proto');

const Registry = grpc.load(PROTO_PATH).MS.Registry;

const RegistryService = {
    _Register : Register,
    _GetID    : GetID,
    _GetName  : GetName,
};

function main() {
    const server = new grpc.Server();
    server.addService(Registry.service, RegistryService);
    server.bind(`0.0.0.0:${CONFIG.server.port}`, grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
