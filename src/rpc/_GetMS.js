import only from 'only';
import logger from '../lib/logger';
import { GetMS } from '../models/registry';

export default async function _GetMS({ request }, cb) {
    try {
        const [msDetails] = await GetMS({ [request.idType]: request[request.idType] });
        cb(null, {
            success   : !!msDetails,
            msDetails : only(msDetails, 'id name type dependents dependencies version maintainers'),
            message   : !msDetails ? 'Requested MS Not Found' : '',
        });
    } catch (err) {
        logger.error('Failed to getMS:', request, 'due to:', err);
        cb(null, {
            success : false,
            message : err.toString(),
        });
    }
}
