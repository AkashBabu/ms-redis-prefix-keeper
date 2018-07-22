import { expect } from 'chai';

// Run MS-Registry Service
import '../src';

import db from '../src/db/mongo';
import { Registry_Register, Registry_GetName } from '../interface';


describe('#getName RPC-GetName', () => {
    let msId = 0;
    const msDetails = {
        name         : 'MS_TEST',
        dependents   : [],
        dependencies : [],
        type         : 0,
    };

    before(async () => {
        db.dropDatabase();
        const result = await Registry_Register(msDetails);
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.exist;

        msId = result.data;
    });

    it('should return name for the corresponding id', async () => {
        const result = await Registry_GetName({ id: msId });
        expect(result).to.be.an('object');
        expect(result.success).to.be.true;
        expect(result.data).to.be.eql(msDetails.name);
    });

    it('should return success: false if MS for the given id does not exist', async () => {
        const result = await Registry_GetName({ id: 123701845 });
        expect(result).to.be.an('object');
        expect(result.success).to.be.false;
        expect(result.message).to.be.eql(`No MS found for the given id: ${123701845}`);
    });
});
