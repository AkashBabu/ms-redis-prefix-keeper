import grpc from 'grpc';
import path from 'path';
import Hi from './rpc/Hi';

const PROTO_PATH = path.join(__dirname, './main.proto');

const helloProto = grpc.load(PROTO_PATH).Hello;

const GreetingService = { 
    _Hi: Hi,
}

function main() {
    const server = new grpc.Server();
    server.addService(helloProto.Greeting.service, GreetingService);
    server.bind('0.0.0.0:50001', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
