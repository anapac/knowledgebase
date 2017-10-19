'use strict';

import express from 'express';
const app = express();

import APIRouter from './APIRouter';
app.use('/API', APIRouter);

app.listen(80, () => {
  console.info('Node is listening on port 80.');
});
