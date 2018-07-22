import { expect } from 'chai';

// Run MS-Registry Service
import '../src';

import db from '../src/db/mongo';
import { Registry_Register } from '../interface';


describe('#register RPC-Register', () => {
    before(() => {
        // Clean the DB
        db.dropDatabase();
    });

    it('should be able to register New MS Request', async () => {
        const msDetails = {
            name         : 'MS_TEST',
            dependents   : [],
            dependencies : [],
            type         : 0,
        };

        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;
    });
    it('should accept duplicate requests with message', async () => {
        const msDetails = {
            name         : 'MS_TEST',
            dependents   : [],
            dependencies : [],
            type         : 0,
        };

        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        const result1 = await Registry_Register(msDetails);
        expect(result1).to.be.an('object');
        expect(result1.success).to.be.true;
        expect(result1.data).to.be.eql(result.data);
    });
});
