export class SocialMedia {

  xingUrl: string;
  gulpUrl: string;

  constructor(data?: any) {
    if (data) {
      this.xingUrl = data.xingUrl;
      this.gulpUrl = data.gulpUrl;
    }
  }
}
