import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import morgan from 'morgan';
import session from 'express-session';

import api from './api';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true
  })
);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api', api);

app.listen(process.env.PORT || 3000, () => {
  console.log('server start');
});
