import { expect } from 'chai';

// Run MS-Registry Service
// import '../dist';

import db from '../dist/db/mongo';
import { Registry_Register, Registry_GetMS } from '../interface';


describe('#getMS RPC-GetMS', () => {
    let msId = 0;
    const msDetails = {
        name         : 'MS_TEST',
        dependents   : [],
        dependencies : [],
        type         : 'UNKNOWN',
    };

    before(async () => {
        // Clean the DB
        db.dropDatabase();

        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        msId = result.data;
    });

    it('should return the corresponding msDetails for the given name', async () => {
        const result = await Registry_GetMS({ name: msDetails.name });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.msDetails).to.deep.include(msDetails);
    });
    it('should return the corresponding msDetails for the given id', async () => {
        const result = await Registry_GetMS({ id: msId });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.msDetails).to.deep.include(msDetails);
    });

    it('should return success: false if MS for the given name does not exist', async () => {
        const result = await Registry_GetMS({ name: 'yfwqheibfa' });
        expect(result).to.be.an('object');
        expect(result.success).to.be.false;
        expect(result.message).to.be.eql('Requested MS Not Found');
    });
});
