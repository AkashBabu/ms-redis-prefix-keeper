import { expect } from 'chai';

// Run the gRPC-Server
import '../src';

import db from '../src/db/mongo';

import { Registry_Register, Registry_Deregister, Registry_GetMS } from '../interface';

describe('#deregister RPC-Deregister', () => {
    before(done => {
        db.dropDatabase(done);
    });

    it('should deregister the given MS', async () => {
        const msDetails = {
            name         : 'MS_TEST',
            type         : 0,
            dependents   : [],
            dependencies : [],
            version      : '0.0.1',
            maintainers  : [],
        };

        let result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        result = await Registry_Deregister({ name: msDetails.name });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;

        result = await Registry_GetMS({ name: msDetails.name });
        expect(result.success).to.be.false;
        expect(result.message).to.be.eql('Requested MS Not Found');
    });
    it('should deregister even if MS doesn\'t exist', async () => {
        const result = await Registry_Deregister({ name: 'DUMMY' });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
    });
});
