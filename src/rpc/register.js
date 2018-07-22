import { GetMS, SaveMS, GetMaxID } from '../models/registry';
import logger from '../lib/logger';
import { MS_TYPE } from '../constants';

export default async function Register({ request: msDetails }, cb) {
    try {
        // Check if already existing
        const [existingMS] = await GetMS({ name: msDetails.name });

        // If Not already present, then create a new entry
        let result;
        if (!existingMS) {
            msDetails.id = await GetMaxID() + 1;
            msDetails.type = MS_TYPE[msDetails.type];
            result = await SaveMS(msDetails);
        }

        cb(null, {
            success : true,
            data    : (existingMS || result).id,
            message : existingMS ? 'Already Registered' : 'New MS Registered',
        });
    } catch (err) {
        logger.error('Failed to register MS:', msDetails, 'due to:', err);
        cb(null, {
            success : false,
            message : err.toString(),
        });
    }
}
