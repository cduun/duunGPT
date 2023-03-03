import { Application, Request, Response } from 'express';
import express = require('express');
import * as log4js from 'log4js';
import { Chat } from './src/Chat';
import dotenv from 'dotenv';

dotenv.config();

const app: Application = express();

log4js.configure({
  appenders: {
    console: { type: 'console' },
    file: { type: 'file', filename: 'logs/server.log' },
  },
  categories: {
    default: { appenders: ['console', 'file'], level: 'debug' },
  },
});

const logger = log4js.getLogger('main');

const chat: Chat = new Chat();

app.get('/', async (_: Request, res: Response) => {
  try {
    chat.postToChatGPT('hey');
  } catch (e) {
    logger.error(e);
  }
  res.send(await chat.test('Hello,'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  logger.info(`Server listening on port ${port}`);
});
