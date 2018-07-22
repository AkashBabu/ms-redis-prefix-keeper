import { expect } from 'chai';

// Run MS-Registry Service
import '../src';

import db from '../src/db/mongo';
import { Registry_Register, Registry_GetID } from '../interface';


describe('#getId RPC-GetID', () => {
    let msId = 0;
    const msDetails = {
        name         : 'MS_TEST',
        dependents   : [],
        dependencies : [],
        type         : 0,
    };

    before(() => {
        // Clean the DB
        db.dropDatabase();
    });

    beforeEach(async () => {
        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        msId = result.data;
    });

    it('should return id for the corresponding name', async () => {
        const result = await Registry_GetID({ name: msDetails.name });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.be.eql(msId);
    });

    it('should return success: false if MS for the given name does not exist', async () => {
        const result = await Registry_GetID({ name: 'yfwqheibfa' });
        expect(result).to.be.an('object');
        expect(result.success).to.be.false;
        expect(result.message).to.be.eql('No MS found for the given name: yfwqheibfa');
    });
});
