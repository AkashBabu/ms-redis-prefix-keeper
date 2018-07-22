import '../src';

import { Registry_Register } from '../interface';

const msDetails = {
    name         : 'MS_TEST',
    dependents   : [],
    dependencies : [],
};

Registry_Register(msDetails, (err, result) => {
    console.log(err, result);
});
