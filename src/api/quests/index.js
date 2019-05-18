import express from 'express';
import * as questsController from './quests.ctrl';

const quests = express.Router();

quests.get('/:id?', questsController.list);
quests.post('/', questsController.create);
quests.delete('/:id', questsController.remove);
quests.patch('/:id', questsController.update);

export default quests;
