import mongo from 'mongojs';
import CONFIG from '../config';

console.log('MongoURL:', CONFIG.db.mongo.url);
const db = mongo(CONFIG.db.mongo.url);

export default db;
