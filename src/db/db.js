const { Client } = require('pg');

const client = new Client({
    user: 'tdfdb_frg4_user',
    host: 'dpg-cjvi8615mpss73b6nuv0-a.oregon-postgres.render.com',
    database: 'tdfdb_frg4',
    password: 'yLrlA2j3glQuT2u4k2P4YoUuCF4z56vk',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();
module.exports = client;