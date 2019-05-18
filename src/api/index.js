import express from 'express';
import users from './users';
import quests from './quests';
import comments from './comments';

const api = express.Router();

api.use('/users', users);
api.use('/quests', quests);
api.use('/comments', comments);

export default api;
