import Sequelize from 'sequelize';
import User from './user';
import Quest from './quest';
import Comment from './comment';
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
db.Comment = Comment(sequelize, Sequelize);

db.User.hasMany(db.Quest, { foreignKey: 'userId' });
db.Quest.hasMany(db.Comment, { foreignKey: 'questId' });

export default db;
