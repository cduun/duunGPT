export class Chat {
  constructor() {}

  public async sendMessage(msg: string): Promise<string> {
    return msg + ' world!';
  }
}
