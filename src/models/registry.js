import db from '../db/mongo';
import CONFIG from '../config';
import logger from '../lib/logger';

const registryColl = db.collection(CONFIG.db.mongo.coll.registry);

export async function GetMS(query) {
    return new Promise((resolve, reject) => {
        registryColl.find(query, (err, microServices) => {
            if (err) {
                logger.error('Failed to Get existing MS for query:', query);
                return reject(err);
            }
            resolve(microServices);
        });
    });
}

export async function GetMaxID() {
    return new Promise((resolve, reject) => {
        registryColl
            .find()
            .sort({ _id: -1 })
            .limit(1, (err, [result = {}]) => {
                if (err) {
                    return reject(err);
                }
                resolve(result.id || 0);
            });
    });
}

export async function SaveMS(msDetails) {
    return new Promise((resolve, reject) => {
        msDetails._ctime = new Date();
        registryColl.insert(msDetails, (err1, result1) => {
            if (err1) {
                logger.error('Failed to save new msDetails');
                return reject(err1);
            }
            resolve(result1);
        });
    });
}
