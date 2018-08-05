import { expect } from 'chai';

// Run MS-Registry Service
import '../dist';

import db from '../dist/db/mongo';
import { Registry_Register, Registry_GetMS } from '../interface';


describe('#register RPC-Register', () => {
    before(() => {
        // Clean the DB
        db.dropDatabase();
    });

    it('should be able to register New MS Request', async () => {
        const msDetails = {
            name         : 'MS_TEST',
            type         : 0,
            dependents   : [],
            dependencies : [],
            version      : '0.0.1',
            maintainers  : [],
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
            version      : '0.0.1',
            maintainers  : [],
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
    it('should update MSDetails when _override flag is true', async () => {
        const msDetails = {
            name         : 'MS_TEST',
            dependents   : [],
            dependencies : [],
            type         : 0,
            version      : '0.0.1',
            maintainers  : [],
        };

        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        msDetails.version = '0.0.2';
        msDetails._override = true;

        const result1 = await Registry_Register(msDetails);
        expect(result1).to.be.an('object');
        expect(result1.success).to.be.true;
        expect(result1.data).to.be.eql(result.data);


        const result2 = await Registry_GetMS({ name: msDetails.name });
        expect(result2).to.be.an('object');
        expect(result2.success).to.be.true;
        expect(result2.msDetails.version).to.be.eql(msDetails.version);
    });
});
