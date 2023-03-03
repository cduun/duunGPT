import { getLogger, Logger } from 'log4js';
import { Configuration, OpenAIApi } from 'openai';
import axios from 'axios';

export class Chat {
  logger: Logger;
  openai: OpenAIApi;

  constructor() {
    this.logger = getLogger('chat');
    const configuration = new Configuration({
      organization: process.env.OPENAI_ORG,
      apiKey: process.env.OPENAI_API_KEY,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public async postToChatGPT(msg: string) {
    try {
      const response = await axios.post(
        'https://api.chatgpt.com/messages',
        {
          message: msg,
          context: 'general',
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
        }
      );

      this.logger.info(response.data);
    } catch (error) {
      this.logger.error(error);
    }
  }

  public async test(msg: string): Promise<string> {
    this.logger.info(`received ${msg}`);
    return msg + ' world!';
  }
}
