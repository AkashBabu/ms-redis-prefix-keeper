import mongo from 'mongojs';
import CONFIG from '../config';

const db = mongo(CONFIG.db.mongo.url);

export default db;
