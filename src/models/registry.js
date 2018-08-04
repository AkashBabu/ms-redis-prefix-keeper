import Promisify from 'lib-promisify';
import db from '../db/mongo';
import CONFIG from '../config';

const registryColl = db.collection(CONFIG.db.mongo.coll.registry);

export async function GetMS(query) {
    query.$or = [
        { _del: { $exists: false } },
        { _del: false },
    ];
    return new Promise((resolve, reject) => {
        registryColl.find(query, (err, microServices) => (err ? reject(err) : resolve(microServices)));
    });
}

export async function GetMaxID() {
    return new Promise((resolve, reject) => {
        registryColl
            .find()
            .sort({ _id: -1 })
            .limit(1, (err, [result = {}]) => {
                if (err) return reject(err);
                resolve(result.id || 0);
            });
    });
}

export async function SaveMS(msDetails) {
    msDetails._ctime = new Date();
    return new Promise((resolve, reject) => {
        registryColl.insert(msDetails, (err, result) => (err ? reject(err) : resolve(result)));
    });
}

export async function OverrideMS(msDetails, { key }) {
    msDetails._utime = new Date();
    return new Promise((resolve, reject) => {
        registryColl.update({ [key]: msDetails[key] }, { $set: msDetails }, (err, result) => (err ? reject(err) : resolve(result)));
    });
}

export async function RemoveMS(query) {
    const uObj = {
        _dTime : new Date(),
        _del   : true,
        // TODO: Implement Deleted By _delBy:
    };
    return new Promise((resolve, reject) => {
        registryColl.update(query, { $set: uObj }, (err, result) => (err ? reject(err) : resolve(result)));
    });
}
