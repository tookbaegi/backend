import express from 'express';
import users from './users';
import quests from './quests';

const api = express.Router();

api.use('/users', users);
api.use('/quests', quests);

export default api;
