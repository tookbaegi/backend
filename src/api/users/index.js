import express from 'express';
import * as userController from './users.ctrl';

const users = express.Router();

users.get('/:id?', userController.list);
users.post('/', userController.create);
users.delete('/:id', userController.remove);
users.patch('/:id', userController.update);

export default users;
