import express from 'express';
import * as commentController from './comments.ctrl';

const comments = express.Router();

comments.get('/:id?', commentController.list);
comments.post('/', commentController.create);
comments.delete('/:id', commentController.remove);
comments.patch('/:id', commentController.update);

export default comments;
