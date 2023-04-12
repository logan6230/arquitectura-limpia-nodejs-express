require('dotenv').config();
const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3000,
    dbUser: 'root',//process.env.DB_USER,
    dbPassword: 'Sijen6230*',//process.env.DB_PASSWORD,
    dbHost: 'localhost',//process.env.DB_HOST,    
    dbName: 'veterinariadb',//process.env.DB_NAME,
    dbPort: process.env.DB_PORT
}
module.exports = {config};