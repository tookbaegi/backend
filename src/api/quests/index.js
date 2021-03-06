import express from 'express';
import * as questsController from './quests.ctrl';

const quests = express.Router();

quests.get('/:userId?', questsController.list);
quests.post('/', questsController.create);
quests.delete('/:id', questsController.remove);
quests.patch('/:id', questsController.update);
quests.post('/:id/like', questsController.like);

export default quests;
