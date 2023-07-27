export default class JWT {
  tokenHeader: string;
  token: string;
  constructor(token: string, tokenHeader: string) {
    this.token = token;
    this.tokenHeader = tokenHeader;
  }
}
