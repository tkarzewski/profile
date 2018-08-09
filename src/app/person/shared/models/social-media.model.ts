export class SocialMedia {

  xingUrl: string;
  gulpUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  snapchatUrl: string;
  pinterestUrl: string;
  twitterUrl: string;
  linkedinUrl: string;


  constructor(data?: any) {
    if (data) {
      this.xingUrl = data.xingUrl;
      this.gulpUrl = data.gulpUrl;
      this.facebookUrl = data.facebookUrl;
      this.instagramUrl = data.instagramUrl;
      this.snapchatUrl = data.snapchatUrl;
      this.pinterestUrl = data.pinterestUrl;
      this.twitterUrl = data.twitterUrl;
      this.linkedinUrl = data.linkedinUrl;
    }
  }

}
