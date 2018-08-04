import logger from '../lib/logger';
import { RemoveMS } from '../models/registry';

export default async function _Deregister({ request }, cb) {
    try {
        await RemoveMS({ [request.idType]: request[request.idType] });
        cb(null, {
            success : true,
            data    : 'MS has been Successfully De-registered',
        });
    } catch (err) {
        logger.error('Failed to deregister MS:', request, 'due to:', err);
        cb(null, {
            success : false,
            message : err.toString(),
        });
    }
}
