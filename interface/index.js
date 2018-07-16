import GRPCClient from 'grpc-pool'
import path from 'path'

const PROTO_PATH = path.join(__dirname, '../proto_buff/main.proto')

export const client = new GRPCClient(PROTO_PATH, {
    maxConnections : 2,
    packageName    : 'Hello',
    serviceName    : 'Greeting',
    url            : 'localhost:50001',
    prefix         : 'RPC'
});