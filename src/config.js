import { GetENV } from 'lib-env';

const CONFIG = Object.freeze({
    docker_test: {
        db: {
            mongo: {
                url  : 'mongodb://mongo/registry_test?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            host : 'ms-registry',
            port : 50004,
        },
    },
    test: {
        db: {
            mongo: {
                url  : 'mongodb://mongo/registry_test?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            host : 'ms-registry',
            port : 50004,
        },
    },
    dev: {
        db: {
            mongo: {
                url  : 'mongodb://localhost:27017/registry_dev?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            host : 'localhost',
            port : 50001,
        },
    },
    staging: {
        db: {
            mongo: {
                url  : 'mongodb://localhost:27017/registry_staging?maxPoolSize=2',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            host : 'ms-registry',
            port : 50001,
        },
    },
    production: {
        db: {
            mongo: {
                url  : 'mongodb://mongo/registry?maxPoolSize=5',
                coll : {
                    registry: 'registry',
                },
            },
        },
        server: {
            host : 'ms-registry',
            port : 10001,
        },
    },
})[GetENV()];

export default CONFIG;

