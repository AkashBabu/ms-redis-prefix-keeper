import mongo from 'mongojs';
import CONFIG from '../config';

const db = mongo(CONFIG.db.mongo.url);

export const GetObjId = id => mongo.ObjectId(id);

export default db;
