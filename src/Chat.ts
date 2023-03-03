import { getLogger, Logger } from 'log4js';

export class Chat {
  logger: Logger;
  constructor() {
    this.logger = getLogger('chat');
  }

  public async sendMessage(msg: string): Promise<string> {
    this.logger.info(`received ${msg}`);
    this.logger.info(`received ${process.env.OPENAI_API_KEY}`);

    return msg + ' world!';
  }
}
