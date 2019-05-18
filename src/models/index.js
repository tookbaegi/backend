import Sequelize from 'sequelize';
import User from './user';
import Quest from './quest';
import dotenv from 'dotenv';
dotenv.config();

const db = {};

const { DB_SCHEMA, DB_USER, DB_PASSWD, DB_HOST } = process.env;

const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWD, {
  host: DB_HOST,
  dialect: 'mysql'
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(sequelize, Sequelize);
db.Quest = Quest(sequelize, Sequelize);

export default db;
