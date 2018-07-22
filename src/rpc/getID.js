import { GetMS } from '../models/registry';
import logger from '../lib/logger';

export default async function GetID({ request: { name } }, cb) {
    try {
        const [ms] = await GetMS({ name });

        const response = {};
        if (!ms) {
            response.success = false;
            response.message = `No MS found for the given name: ${name}`;
        } else {
            response.success = true;
            response.data = ms.id;
        }

        cb(null, response);
    } catch (err) {
        logger.error('Failed to get MS for name:', name, 'due to:', err);
        cb(null, {
            success : false,
            message : err.toString(),
        });
    }
}
