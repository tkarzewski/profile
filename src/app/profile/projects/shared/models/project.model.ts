export class Project {

  title: string;
  subTitle: string;
  fromDate: Date;
  toDate: Date;
  customer: string;
  roles: Array<string>;
  description: string;
  keywords: Array<string>;

  constructor(data?: any) {
    if (data) {
      this.title = data.title;
      this.subTitle = data.subTitle;
      this.fromDate = new Date(data.fromDate);
      this.toDate = new Date(data.toDate);
      this.customer = data.customer;
      this.roles = data.roles;
      this.description = data.description;
      this.keywords = data.keywords;
    }
  }
}
