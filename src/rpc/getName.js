import { GetMS } from '../models/registry';
import logger from '../lib/logger';

export default async function GetName({ request: { id } }, cb) {
    try {
        const [ms] = await GetMS({ id });

        const response = {
            success : !!ms,
            data    : (ms || {}).name,
            message : ms ? '' : `No MS found for the given id: ${id}`,
        };

        cb(null, response);
    } catch (err) {
        logger.error('Failed to get MS for id:', id, 'due to:', err);
        cb(null, {
            success : false,
            message : err.toString(),
        });
    }
}
