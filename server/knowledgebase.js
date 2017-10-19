'use strict';

import express from 'express';
const app = express();

import APIRouter from './APIRouter';

app.listen(666, () => {
  console.info('Node is listening on port 666.');
});
