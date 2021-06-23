import {Sequelize} from 'sequelize';

// @ts-ignore
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
    // logging: false
});

export default db;