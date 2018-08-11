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
      this.fromDate = data.fromDate ? new Date(data.fromDate) : null;
      this.toDate = data.toDate ? new Date(data.toDate) : null;
      this.customer = data.customer;
      this.roles = data.roles;
      this.description = data.description;
      this.keywords = data.keywords;
    }
  }
}
